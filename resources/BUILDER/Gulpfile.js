var gulp       = require('gulp');
var sass       = require('gulp-sass');
var livereload = require('gulp-livereload');
var minify     = require('gulp-minify');
var minifyCss  = require('gulp-minify-css');
var path       = require('path');
var rename     = require("gulp-rename");


const SOURCE_JS = []


gulp.task('sass', function () {
   return gulp.src('SCSS/app.scss')
      .pipe(sass())
      .pipe(minifyCss({ compatibility: 'ie8' }))
      .pipe(gulp.dest(path.join(__dirname, '/../../public/css/')))
      .pipe(livereload());
});
gulp.task('script-app', function () {
   return gulp.src([
         "JAVASCRIPT/app.js",
         "JAVASCRIPT/calendar.js",
         "JAVASCRIPT/register_parent.js",
         "JAVASCRIPT/sitter-common.js",
         "JAVASCRIPT/employer-register.js",
         "JAVASCRIPT/login.js",
         "JAVASCRIPT/detect.js",
         "JAVASCRIPT/sitter-register.js",
         "JAVASCRIPT/sitter-register-parent.js",
         "JAVASCRIPT/sitter-edit-mypage.js",
         "JAVASCRIPT/forgot.js",
         "JAVASCRIPT/employer-mypage.js",
         "JAVASCRIPT/employer-edit.js",
         "JAVASCRIPT/admin_sitter.js",
         "JAVASCRIPT/admin_employer.js",
         "JAVASCRIPT/employer-upload-avatar.js",
         "JAVASCRIPT/admin_chat.js",
         "JAVASCRIPT/admin_base.js",
      ])
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

   gulp.watch('JAVASCRIPT/*.js', gulp.series('script-app'));
   gulp.watch('JAVASCRIPT/*/*.js', gulp.series('script-app'));
});
