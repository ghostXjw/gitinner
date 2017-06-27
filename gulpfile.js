const gulp = require('gulp')
const pug = require("gulp-pug")
const stylus = require('gulp-stylus')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer');
const rm = n => new Promise(r => rimraf(n, r))
const pkg = n => new Promise(r => packager(n, r))

gulp.task('build', function() {
  gulp.src([
    'node_modules/jquery/dist/jquery.js',
  ]).pipe(gulp.dest('dist/lib'))

  gulp.src('src/html/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())

  gulp.src('src/image/**/*')
    .pipe(gulp.dest('dist/image'))
    .pipe(connect.reload())

  gulp.src('src/style/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 1%'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/style'))
    .pipe(connect.reload())

  gulp.src('src/script/*')
    .pipe(gulp.dest('dist/script'))
    .pipe(connect.reload())

})

gulp.task('watch', function(){
  gulp.watch('src/**', ['build'])
})

gulp.task('dev', ['build', 'connect', 'watch'])
