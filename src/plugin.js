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
};

const plugin = {
	id: 'chartJsPluginBarchartBackground',

	beforeInit: (chart) => {
		if (!isSupported(chart.config.type)) {
			console.warn('The type %s is not supported by this plugin', chart.config.type);
		}
	},

	beforeDraw: (chart, easingValue, options) => {
		if (!hasData(chart.config.data) || !isSupported(chart.config.type)) {
			return;
		}
		const pluginOptions = Object.assign({}, defaultOptions, options);
		const isHorizontal = chart.config.type.startsWith('horizontal');
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
			let acc = chart.chartArea.top;
			for (let i = 0; i < numGroups; i += 2) {
				ctx.fillRect(chart.chartArea.left, acc, chartWidth, groupWidth);
				acc += groupWidth * 2;
			}
		} else {
			groupWidth = chartWidth / numGroups;
			let acc = chart.chartArea.left;
			for (let i = 0; i < numGroups; i += 2) {
				ctx.fillRect(acc, chart.chartArea.top, groupWidth, chartHeight);
				acc += groupWidth * 2;
			}
		}

		// restore the saved state
		ctx.restore();
	}
};

// if the environment is neither amd nor commonjs, register the plugin globally for the samples and tests
export default plugin;
if (!(typeof define === 'function' && define.amd) && !(typeof module === 'object' && module.exports)) {
	Chart.pluginService.register(plugin);
}
