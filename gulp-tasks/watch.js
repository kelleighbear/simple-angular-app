'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    
    plugins.browserSync.init({
        server: {
            baseDir: 'client/build'
        }
    });

    gulp.watch(config.paths.js, ['watch_js']);
    gulp.watch(config.paths.html, ['watch_html']);
    gulp.watch(config.paths.sass, ['watch_sass']);
  };
};
