# Alternating Barchart Background Chart.js Plugin
[![datavisyn][datavisyn-image]][datavisyn-url] [![NPM Package][npm-image]][npm-url] [![CircleCI][circleci-image]][circleci-url]

[Chart.js](http://www.chartjs.org/) plugin for adding an alternating background to chart axes, such as horizontal and vertical Barcharts, or [Box and Violin Plots](https://github.com/datavisyn/chartjs-chart-box-and-violin-plot).

## Install
```bash
npm install --save chart.js chartjs-plugin-barchart-background
```

## Usage and options

```typescript
interface IChartJsPluginBarchartBackgroundOptions {
	/**
	 * fill color
	 * @default #f3f3f3
	 */
	color: string;
	/**
	 * render mode
	 * options:
	 *  * odd = first, third, ...
	 *  * even = second, fourth, ...
	 * @default 'odd'
	 */
	mode: 'odd'|'even';
	/**
	 * axis to render the alternating background for
	 * @default: 'category'
	 */
	axis: 'category'|'x'|'y';
}

```javascript
options: {
  ...

  plugins: {
	  chartJsPluginBarchartBackground: {
			color: '#efefef',
			mode: 'odd'
    }
  }

  ...
}
```

## Samples
See the [samples](https://github.com/datavisyn/chartjs-plugin-barchart-background/tree/master/samples)


![Vertical](https://user-images.githubusercontent.com/5220584/35855546-d94b2ee8-0b33-11e8-962f-47e7b0dca0ab.PNG)


![Horizontal](https://user-images.githubusercontent.com/5220584/35855562-eb4d7588-0b33-11e8-9386-d02ce56af1c7.PNG)

## Building

```sh
npm install
npm run build
```


***

<div style="display:flex;align-items:center">
  <a href="http://datavisyn.io"><img src="https://user-images.githubusercontent.com/1711080/37700685-bcbb18c6-2cec-11e8-9b6f-f49c9ef6c167.png" align="left" width="50px" hspace="10" vspace="6"></a>
  Developed by&nbsp;<strong><a href="http://datavisyn.io">datavisyn</a></strong>.
</div>


[datavisyn-image]: https://img.shields.io/badge/datavisyn-io-black.svg
[datavisyn-url]: http://datavisyn.io
[npm-image]: https://badge.fury.io/js/chartjs-plugin-barchart-background.svg
[npm-url]: https://npmjs.org/package/chartjs-plugin-barchart-background
[circleci-image]: https://circleci.com/gh/datavisyn/chartjs-plugin-barchart-background.svg?style=shield
[circleci-url]: https://circleci.com/gh/datavisyn/chartjs-plugin-barchart-background

