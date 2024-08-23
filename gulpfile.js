const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest('./dist/css'))
}

function imagens(){
    return gulp.src('./src/images/**/*',{encoding:false})
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}


exports.default = gulp.parallel(styles, imagens)

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/images/**/*', gulp.parallel(imagens))
}