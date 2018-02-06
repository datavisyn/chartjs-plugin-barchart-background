(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('chart.js')) :
	typeof define === 'function' && define.amd ? define(['chart.js'], factory) :
	(global.PluginBarchartBackground = factory(global.Chart));
}(this, (function (Chart) { 'use strict';

Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var plugin = {
	id: 'chartJsPluginBarchartBackground',

	beforeDraw: function beforeDraw(chart, easingValue, options) {

		var supportedTypes = ['boxplot', 'horizontalBoxplot', 'violin', 'horizontalViolin', 'bar', 'horizontalBar'];
		if (!supportedTypes.indexOf(chart.config.type) > -1) {
			console.warn('The type %s is not supported by this plugin', chart.config.type);
			return;
		}

		var isHorizontal = chart.config.type.startsWith('horizontal') ? true : false;
		var chartWidth = chart.chartArea.right - chart.chartArea.left;
		var chartHeight = chart.chartArea.bottom - chart.chartArea.top;
		var numGroups = Math.max.apply(Math, toConsumableArray(chart.config.data.datasets.map(function (d) {
			return d.data.length;
		})));

		// push the current canvas state onto the stack
		var ctx = chart.ctx;
		ctx.save();

		// set background color
		ctx.fillStyle = options.color;

		// draw rectangles
		var groupWidth = void 0;
		if (isHorizontal) {
			groupWidth = chartHeight / numGroups;
			var i = chart.chartArea.top;
			while (i < chart.chartArea.bottom) {
				ctx.fillRect(chart.chartArea.left, i, chartWidth, groupWidth);
				i += groupWidth * 2;
			}
		} else {
			groupWidth = chartWidth / numGroups;
			var _i = chart.chartArea.left;
			while (_i < chart.chartArea.right) {
				ctx.fillRect(_i, chart.chartArea.top, groupWidth, chartHeight);
				_i += groupWidth * 2;
			}
		}

		// restore the saved state
		ctx.restore();
	}
};

Chart.pluginService.register(plugin);

return plugin;

})));
