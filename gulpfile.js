var gulp = require('gulp');
gulp.task('web_site', function (done) {
    console.log(`Welcome on Men's Manor Web Site`);
    done();
});

var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function () {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});

