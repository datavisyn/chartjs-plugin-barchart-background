'use strict';

import Chart from 'chart.js';

const isSupported = (type) => [
	'boxplot',
	'horizontalBoxplot',
	'violin',
	'horizontalViolin',
	'bar',
	'horizontalBar'
].indexOf(type) !== -1;

const defaultOptions = {
	color: '#f3f3f3'
};

const hasData = (data) => {
	return data && data.datasets && data.datasets.length > 0;
}

const plugin = {
	id: 'chartJsPluginBarchartBackground',

	beforeInit: (chart) => {
		if (!isSupported(chart.config.type)) {
			console.warn('The type %s is not supported by this plugin', chart.config.type);
			return;
		}
	},

	beforeDraw: (chart, easingValue, options) => {
		if (hasData(chart.config.data)) {
			const pluginOptions = Object.assign({}, defaultOptions, options);
			const isHorizontal = chart.config.type.startsWith('horizontal') ? true : false;
			const chartWidth = chart.chartArea.right - chart.chartArea.left;
			const chartHeight = chart.chartArea.bottom - chart.chartArea.top;
			const numGroups = Math.max(...chart.config.data.datasets.map((d) => d.data.length));

			// push the current canvas state onto the stack
			const ctx = chart.ctx;
			ctx.save();

			// set background color
			ctx.fillStyle = pluginOptions.color;

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
	}
};

export default plugin;
