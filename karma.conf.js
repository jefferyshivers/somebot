// Karma configuration
// Generated on Fri Mar 09 2018 17:28:10 GMT-0500 (EST)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "chai"],
    plugins: [
      "karma-mocha",
      "karma-chai",
      "karma-webpack",
      "karma-chrome-launcher"
    ],

    // list of files / patterns to load in the browser
    files: [
      // "src/**/*.js"
      "src/testHelper.js"
    ],

    // list of files / patterns to exclude
    exclude: ["src/**/*.test.js", "src/**/*.test.jsx"],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/testHelper.js": ["webpack"]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["ChromeHeadless"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
      module: {
        rules: [
          {
            test: /\.js/,
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          {
            test: /\.jsx/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: ["env", "react"]
            }
          }
        ]
      }
      // externals: {
      //   cheerio: "window",
      //   "react/addons": "react",
      //   "react/lib/ExecutionEnvironment": "react",
      //   "react/lib/ReactContext": "react",
      //   "react-addons-test-utils": "react-dom"
      // }
    }
  });
};
