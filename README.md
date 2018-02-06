# Alternating Barchart Background Chart.js Plugin
[![datavisyn][datavisyn-image]][datavisyn-url] [![NPM Package][npm-image]][npm-url]

[Chart.js](http://www.chartjs.org/) plugin for adding an alternating background to horizontal and vertical Barcharts, [Box and Violin Plots](https://github.com/datavisyn/chartjs-chart-box-and-violin-plot).

## Install
```bash
npm install --save chartjs chartjs-plugin-barchart-background
```

## Usage and options

```javascript
options: {
  ...

  plugins: {
	  chartJsPluginBarchartBackground:
      color: '#eeeeee'
    }
  }
  
  ...
}
```

## Samples
See the [samples](https://github.com/datavisyn/chartjs-plugin-barchart-background/tree/master/samples)


![Vertical](https://user-images.githubusercontent.com/5220584/35855546-d94b2ee8-0b33-11e8-962f-47e7b0dca0ab.PNG)


![Horizontal](https://user-images.githubusercontent.com/5220584/35855562-eb4d7588-0b33-11e8-9386-d02ce56af1c7.PNG)

## Supported chart types
`boxplot`, `horizontalBoxplot`, `violin`, `horizontalViolin`, `bar`, `horizontalBar`

## Building

```sh
npm install
npm run build
```


***

<div style="display:flex;align-items:center">
<a href="http://datavisyn.io"><img src="https://user-images.githubusercontent.com/5220584/35052732-9efb1de2-fba8-11e7-91fd-8e80216c0dc3.png" align="left" width="200px" hspace="10" vspace="6"></a>
This repository is created by&nbsp;<strong><a href="http://datavisyn.io">datavisyn</a></strong>.
</div>


[datavisyn-image]: https://img.shields.io/badge/datavisyn-io-black.svg
[datavisyn-url]: http://datavisyn.io
[npm-image]: https://badge.fury.io/js/chartjs-plugin-barchart-background.svg
[npm-url]: https://npmjs.org/package/chartjs-plugin-barchart-background
[circleci-image]: https://circleci.com/gh/datavisyn/chartjs-plugin-barchart-background.svg?style=shield
[circleci-url]: https://circleci.com/gh/datavisyn/chartjs-plugin-barchart-background

