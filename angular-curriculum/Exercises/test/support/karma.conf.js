// karma.conf.js
module.exports = function(config) {
  config.set({

    basePath: '../../',

    frameworks: ['mocha', 'sinon-chai'],

    browsers : ['Chrome'],

    reporters : ['mocha'],

    preprocessors: {
      '**/*.html': ['ng-html2js']
    },

    files: [

      { pattern: 'node_modules/jquery/dist/jquery.min.js', watched: false },

      { pattern: 'node_modules/chai/chai.js', watched: false },

      { pattern: 'node_modules/angular/angular.js', watched: false },

      { pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false },

      { pattern: 'node_modules/angular-route/angular-route.js', watched: false },

      'src/app.js',

      'src/**/*.js',

      'src/**/*.html',

      'test/support/setup.js',

      {pattern: 'templates/**/*.html', included: false, served: false},

      'test/**/*.test.js',

    ],

    // see https://github.com/karma-runner/karma-ng-html2js-preprocessor
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'app'
    },

    client: {
      chai: {
        includeStack: true
      }
    }

  });
};
