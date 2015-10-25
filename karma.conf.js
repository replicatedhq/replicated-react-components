/**
  Loads configuration while ensuring sounce-map is enabled
 */
function loadWebpackConfig() {
  var webpackConfig = require('./webpack.config.js');
  webpackConfig.devtool = 'eval-source-map';
  webpackConfig.debug = true;
  return webpackConfig;
}

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: 'tests.webpack.js', watched: false },
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'tests.webpack.js': ['webpack'],
    },
    reporters: ['dots'],
    singleRun: true,
    webpack: loadWebpackConfig(),
    webpackServer: {
      noInfo: true,
    },
  });
};
