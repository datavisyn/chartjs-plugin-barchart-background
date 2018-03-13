(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('chart.js')) :
	typeof define === 'function' && define.amd ? define(['chart.js'], factory) :
	(global.PluginBarchartBackground = factory(global.Chart));
}(this, (function (Chart) { 'use strict';

Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};























































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var isSupported = function isSupported(type) {
	return ['boxplot', 'horizontalBoxplot', 'violin', 'horizontalViolin', 'bar', 'horizontalBar'].indexOf(type) !== -1;
};

var defaultOptions = {
	color: '#f3f3f3'
};

var hasData = function hasData(data) {
	return data && data.datasets && data.datasets.length > 0;
};

var plugin = {
	id: 'chartJsPluginBarchartBackground',

	beforeInit: function beforeInit(chart) {
		if (!isSupported(chart.config.type)) {
			console.warn('The type %s is not supported by this plugin', chart.config.type);
		}
	},

	beforeDraw: function beforeDraw(chart, easingValue, options) {
		if (!hasData(chart.config.data) || !isSupported(chart.config.type)) {
			return;
		}
		var pluginOptions = Object.assign({}, defaultOptions, options);
		var isHorizontal = chart.config.type.startsWith('horizontal');
		var chartWidth = chart.chartArea.right - chart.chartArea.left;
		var chartHeight = chart.chartArea.bottom - chart.chartArea.top;
		var numGroups = Math.max.apply(Math, toConsumableArray(chart.config.data.datasets.map(function (d) {
			return d.data.length;
		})));

		// push the current canvas state onto the stack
		var ctx = chart.ctx;
		ctx.save();

		// set background color
		ctx.fillStyle = pluginOptions.color;

		// draw rectangles
		var groupWidth = void 0;
		if (isHorizontal) {
			groupWidth = chartHeight / numGroups;
			var acc = chart.chartArea.top;
			for (var i = 0; i < numGroups; ++i) {
				ctx.fillRect(chart.chartArea.left, acc, chartWidth, groupWidth);
				acc += groupWidth * 2;
			}
		} else {
			groupWidth = chartWidth / numGroups;
			var _acc = chart.chartArea.left;
			for (var _i = 0; _i < numGroups; ++_i) {
				ctx.fillRect(_acc, chart.chartArea.top, groupWidth, chartHeight);
				_acc += groupWidth * 2;
			}
		}

		// restore the saved state
		ctx.restore();
	}
};

if (!(typeof define === 'function' && define.amd) && !((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports)) {
	Chart.pluginService.register(plugin);
}

return plugin;

})));
