'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
	return gulp.src(config.paths.sass)
    .pipe(plugins.sass({
        style: 'compressed',
        errLogToConsole: true,
        onError: function(err) {
            return plugins.notify().write(err);
        }
    }))
    .pipe(plugins.autoprefix('last 3 versions'))
    .pipe(gulp.dest(config.buildPath +'/css'))
    .pipe(plugins.notify({
        message: 'Sass complete',
        onLast: true
    }));
  };
};
