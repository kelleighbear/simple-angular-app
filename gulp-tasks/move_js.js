'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
	return gulp.src(config.paths.js)
    .pipe(gulp.dest(config.buildPath))
    .pipe(plugins.notify({
        message: 'Move JS complete',
        onLast: true
    }));
  };
};
