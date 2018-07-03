'use strict';

import Chart from 'chart.js';

const defaultOptions = {
  color: '#f3f3f3',
  axis: 'category',
  mode: 'odd'
};


function getLineValue(scale, index, offsetGridLines) {
  // see core.scale.js -> getLineValue
  var lineValue = scale.getPixelForTick(index);

  if (offsetGridLines) {
    if (index === 0) {
      lineValue -= (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      lineValue -= (lineValue - scale.getPixelForTick(index - 1)) / 2;
    }
  }
  return lineValue;
}

const plugin = {
  id: 'chartJsPluginBarchartBackground',

  _hasData(data) {
    return data && data.datasets && data.datasets.length > 0;
  },

  _findScale(chart, options) {
    const scales = Object.keys(chart.scales).map((d) => chart.scales[d]);
    if (options.axis === 'category') {
      return scales.find((d) => d.type === 'hierarchical' || d.type === 'category');
    }
    return scales.find((d) => d.id.startsWith(options.axis));
  },

  beforeDraw(chart, _easingValue, options) {
    options = Object.assign({}, defaultOptions, options);

    const scale = this._findScale(chart, options);
    if (!this._hasData(chart.config.data) || !scale) {
      return;
    }
    const ticks = scale.getTicks();
    if (!ticks || ticks.length === 0) {
      return;
    }

    const isHorizontal = scale.isHorizontal();
    const chartArea = chart.chartArea;

    const soptions = scale.options;
    const gridLines = soptions.gridLines;

    // push the current canvas state onto the stack
    const ctx = chart.ctx;
    ctx.save();

    // set background color
    ctx.fillStyle = options.color;

    // based on core.scale.js
    const tickPositions = ticks.map((_, index) => getLineValue(scale, index, gridLines.offsetGridLines && ticks.length > 1));

    const shift = options.mode === 'odd' ? 0 : 1;
    if (tickPositions.length % 2 === (1-shift)) {
      // add the right border as artifical one
      tickPositions.push(isHorizontal ? chartArea.right : chartArea.bottom);
    }

    if (isHorizontal) {
      const chartHeight = chartArea.bottom - chartArea.top;
      for (let i = shift; i < tickPositions.length; i += 2) {
        const x = tickPositions[i];
        const x2 = tickPositions[i + 1];
        ctx.fillRect(x, chartArea.top, x2 - x, chartHeight);
      }
    } else {
      const chartWidth = chartArea.right - chartArea.left;
      for (let i = shift; i < tickPositions.length; i += 2) {
        const y = tickPositions[i];
        const y2 = tickPositions[i + 1];
        ctx.fillRect(chartArea.left, y, chartWidth, y2 - y);
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
