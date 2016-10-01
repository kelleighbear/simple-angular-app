'use strict';

module.exports = function(gulp, config, plugins) {
    return {
        fn: function() {
            var options = {
                read: false,
                cwd: '',
                ignorePath: [config.buildPath + '/', '../build'],
                relative: true
            };

            return gulp
                .src(config.buildPath + '/index.html')
                .pipe(plugins.inject(gulp.src(config.buildPath + '/**/*.css'), options))
                .pipe(gulp.dest(config.buildPath));
        }
    };
};
