var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');


// gulp.task('move-css',['clean'],function(){
// 	return gulp.src("./source/css/*.css")
// 	.pipe(gulp.dest('./dist/css'));
// });

// // Permite fazer a chamada da function em cada save do arquivo
gulp.task('back', function(){
	gulp.watch('./source/scss/*.scss',['compilar-sass']);
	gulp.watch('./source/*.html',['minify-html']);
});

gulp.task('compilar-sass',['minify-css'],function(){
	return gulp.src("./source/scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("./dist/css"));
});

gulp.task('minify-css',['minify-html'],function(){
  return gulp.src('./source/scss/*.scss')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify-html', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});
