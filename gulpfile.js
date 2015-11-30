var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var del = require('del');
var concat = require('gulp-concat');

gulp.src([
    'app/**/*.js',
    'app/**/*.css',
    'bower_components/**/*.js',
    'bower_components/**/*.css'
]);

gulp.task('scripts', function () {
    gulp
        .src(['app/**/*.js', '!app/**/*.min.js'])
        .pipe(reload({stream: true}))
    ;
});

gulp.task('html', function () {
    gulp.src('app/**/*.html')
        .pipe(reload({stream: true}));
});

gulp.task('browserSync', function () {
    browserSync({
        port: 8000,
        server: {
            baseDir: "./build/",
            routes: {
                '/node_modules': 'node_modules'
            }
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.html', ['html', 'build:copyApp']);
    gulp.watch('app/**/*.js', ['scripts', 'build:copyJS']);
});

gulp.task('build:cleanFolder', function (callback) {
    del([
        'build/*'
    ], callback);
});

gulp.task('build:copyApp', function () {
    return gulp.src(['app/**/*.*', '!app/**/*.js'])
        .pipe(gulp.dest('./build/'));
});

gulp.task('build:copyJS', function () {
    return gulp.src('app/**/*.js')
        .pipe(concat("all.min.js"))
        .pipe(gulp.dest('./build/'));
});

gulp.task('build:remove', function (callback) {
    del([
        'build/less/'
    ], callback);
});

gulp.task('build', ['build:cleanFolder', 'build:copyApp', 'build:copyJS', 'build:remove']);
gulp.task('serve', ['scripts', 'html', 'build', 'browserSync', 'watch']);