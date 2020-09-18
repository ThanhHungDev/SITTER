var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    minify     = require('gulp-minify'),
    minifyCss  = require('gulp-minify-css'),
    path       = require('path'),
    rename     = require("gulp-rename"),
    cache      = require('gulp-cached')



gulp.task('sass', function () {
   return gulp.src('SCSS/app.scss')
      .pipe(sass())
      .pipe(minifyCss({ compatibility: 'ie8' }))
      .pipe(gulp.dest(path.join(__dirname, '/../../public/css/')))
      .pipe(livereload());
});

gulp.task('script-app', function () {
   return gulp.src([ "JAVASCRIPT/*.js" ])
      .pipe(cache('linting'))
      .pipe(minify({
         ext: {
            min: '.min.js'
         },
         noSource: true
      }))
      // .pipe(rename({ suffix: '.min' }))
      ///// 
      .pipe(gulp.dest(path.join(__dirname, '/../../public/js/')))
      .pipe(livereload());
});
 
// Watch Files For Changes
gulp.task('watch', function () {
   livereload.listen();
   gulp.watch('SCSS/*/*.scss', gulp.series('sass'));
   gulp.watch('SCSS/*.scss', gulp.series('sass'));
   gulp.watch('SCSS/*/*/*.scss', gulp.series('sass'));

   gulp.watch([
      'JAVASCRIPT/*.js',
      'JAVASCRIPT/*/*.js'
   ], gulp.series('script-app'));
});
