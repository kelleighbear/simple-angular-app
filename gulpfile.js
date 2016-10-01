var gulp = require('gulp');
var taskLoader = require('gulp-simple-task-loader');
taskLoader({
    taskDirectory: 'gulp-tasks',
    plugins: {
        autoprefix: require('gulp-autoprefixer'),
        browserSync: require('browser-sync').create(),
        connect: require('gulp-connect'),
        del: require('del'),
        env: require('gulp-env'),
        inject: require('gulp-inject'),
        notify: require('gulp-notify'),
        sass: require('gulp-sass'),
        runSequence: require('run-sequence'),
        mainBowerFiles: require('gulp-main-bower-files'),
        order: require('gulp-order'),
        libs: require('bower-files')()
    },
    configFile: 'gulp.config.js'
}, gulp);
