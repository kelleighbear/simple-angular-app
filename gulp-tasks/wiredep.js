'use strict';

module.exports = function(gulp, config, plugins) {
    return {
        deps: [],
        fn: function() {

            var wiredep = require('wiredep').stream;
            var wireOptions = config.getWiredepDefaultOptions();

            function orderSrc(src, order) {
                return gulp
                    .src(src)
                    .pipe(plugins.order(order));
            }

            function inject(src, order) {
                var options = {
                    read: false,
                    relative: true
                };

                return plugins.inject(orderSrc(src, order), options);
            }

            // Only include stubs if flag is enabled
            var js = config.paths.js;

            return gulp
                .src(config.paths.index)
                .pipe(wiredep(wireOptions))
                .pipe(inject(config.paths.js, config.paths.jsOrder))
                .pipe(gulp.dest(config.buildPath))
                .pipe(plugins.notify({
                    message: 'Wiredep complete',
                    onLast: true
                }));
        }
    };
};
