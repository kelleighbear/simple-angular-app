'use strict';

module.exports = function(gulp, config, plugins) {
  return {
    deps: ['move_html'],
    params: [],
    fn: function(done) {
      plugins.browserSync.reload();
      done();
    }
  };
};
