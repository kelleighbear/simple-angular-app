'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
	return gulp.src(config.paths.img)
    .pipe(gulp.dest(config.buildPath + '/img'))
    .pipe(plugins.notify({
        message: 'Move Images complete',
        onLast: true
    }));
  };
};
