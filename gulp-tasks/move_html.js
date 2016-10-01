'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
	return gulp.src(config.paths.html)
    .pipe(gulp.dest(config.buildPath))
    .pipe(plugins.notify({
        message: 'Move HTML complete',
        onLast: true
    }));
  };
};
