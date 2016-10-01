'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
	return gulp.src(config.paths.vendor)
    .pipe(gulp.dest(config.buildPath + '/bower_components'))
    .pipe(plugins.notify({
        message: 'Vendor Code complete',
        onLast: true
    }));
  };
};
