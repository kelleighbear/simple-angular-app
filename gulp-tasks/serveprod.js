'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    plugins.connect.server({
    root: ['client/build'],
    port: process.env.PORT || 8080, // localhost:5000
    livereload: false
  });
  };
};
