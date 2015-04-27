/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-in-viewport-demo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' use.typekit.net https://*.firebaseio.com *.googleapis.com *.gstatic.com",
      'connect-src': "'self' www.google-analytics.com wss://*.firebaseio.com",
      'font-src': "'self' data: fonts.gstatic.com",
      'img-src': "'self' p.typekit.net google-analytics.com lorempixel.com *.googleapis.com *.gstatic.com placeimg.com *.imgur.com",
      'style-src': "'self' 'unsafe-inline' use.typekit.net fonts.googleapis.com",
      'media-src': "'self'"
    },

    viewportConfig: {
      viewportUseRAF            : true,
      viewportSpy               : true,
      viewportScrollSensitivity : 10,
      viewportTolerance: {
        top    : 200,
        bottom : 200
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
