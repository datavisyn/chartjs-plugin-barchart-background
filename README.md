# DEPRECATED: Alternating Barchart Background Chart.js Plugin
[![Target Discovery Platform][tdp-image]][tdp-url] [![NPM Package][npm-image]][npm-url] [![CircleCI][circleci-image]][circleci-url]

[Chart.js](http://www.chartjs.org/) plugin for adding an alternating background to chart axes, such as horizontal and vertical Barcharts, or [Box and Violin Plots](https://github.com/datavisyn/chartjs-chart-box-and-violin-plot).

### DEPRECATION Information

Please note that this project has been archived and is no longer being maintained.


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
```

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
<a href="https://www.datavisyn.io"><img src="https://www.datavisyn.io/img/logos/datavisyn-logo.png" align="left" width="200px" hspace="10" vspace="6"></a>
This repository is part of the **Target Discovery Platform** (TDP). For tutorials, API docs, and more information about the build and deployment process, see the [documentation page](https://wiki.datavisyn.io).


[tdp-image]: https://img.shields.io/badge/Target%20Discovery%20Platform-Library-violet.svg
[tdp-url]: http://datavisyn.io
[npm-image]: https://badge.fury.io/js/chartjs-plugin-barchart-background.svg
[npm-url]: https://npmjs.org/package/chartjs-plugin-barchart-background
[circleci-image]: https://circleci.com/gh/datavisyn/chartjs-plugin-barchart-background.svg?style=shield
[circleci-url]: https://circleci.com/gh/datavisyn/chartjs-plugin-barchart-background

