'use strict';

module.exports = function(gulp, config, plugins) {
  return {
    deps: ['sass'],
    params: [],
    fn: function(done) {
      plugins.browserSync.reload();
      done();
    }
  };
};
