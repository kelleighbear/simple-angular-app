'use strict';

module.exports = function(gulp, config, plugins) {
	return function(cb) {
		plugins.runSequence(
      'clean',
      ['move_app', 'move_vendor'],
		  ['wiredep', 'sass'],
			['css'],
		  cb);
	};
};
