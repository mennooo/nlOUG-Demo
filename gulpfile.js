const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

gulp.task('transpile', () => {
  gulp.src(['src/core.js', 'src/modules/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('dist/modules'))
})

gulp.task('bundle', () => {
  gulp.src(['src/core.js', 'src/modules/*.js'])
    .pipe(concat('demo.all.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'))
})

gulp.watch('src/**/*.js', ['transpile', 'bundle'])

gulp.task('default', ['transpile', 'bundle'])
