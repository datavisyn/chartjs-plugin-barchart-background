'use strict';

import Chart from 'chart.js';

const plugin = {
	id: 'chartJsPluginBarchartBackground',

	beforeDraw: (chart, easingValue, options) => {

		const supportedTypes = ['boxplot', 'horizontalBoxplot', 'violin', 'horizontalViolin', 'bar', 'horizontalBar'];
		if (!supportedTypes.indexOf(chart.config.type) > 0) {
			console.warn('The type %s is not supported by this plugin', chart.config.type);
			return;
		}

		const isHorizontal = chart.config.type.startsWith('horizontal') ? true : false;
		const chartWidth = chart.chartArea.right - chart.chartArea.left;
		const chartHeight = chart.chartArea.bottom - chart.chartArea.top;
		const numGroups = Math.max(...chart.config.data.datasets.map((d) => d.data.length));

		// push the current canvas state onto the stack
		const ctx = chart.ctx;
		ctx.save();

		// set background color
		ctx.fillStyle = options.color;

		// draw rectangles
		let groupWidth;
		if (isHorizontal) {
			groupWidth = chartHeight / numGroups;
			let i = chart.chartArea.top;
			while (i < chart.chartArea.bottom) {
				ctx.fillRect(chart.chartArea.left, i, chartWidth, groupWidth);
				i += groupWidth * 2;
			}
		} else {
			groupWidth = chartWidth / numGroups;
			let i = chart.chartArea.left;
			while (i < chart.chartArea.right) {
				ctx.fillRect(i, chart.chartArea.top, groupWidth, chartHeight);
				i += groupWidth * 2;
			}
		}

		// restore the saved state
		ctx.restore();
	}
};

export default plugin;
Chart.pluginService.register(plugin);
