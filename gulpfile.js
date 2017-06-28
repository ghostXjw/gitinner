const gulp = require('gulp')
const pug = require("gulp-pug")
const stylus = require('gulp-stylus')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer');

gulp.task('build', function() {
  gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/flatpickr/dist/flatpickr.min.js',
    'node_modules/flatpickr/dist/flatpickr.min.css',
  ]).pipe(gulp.dest('dist/lib'))

  gulp.src([
    'node_modules/flatpickr/dist/l10n/zh.js'
  ]).pipe(gulp.dest('dist/lib/l10n'))

  gulp.src([
    'node_modules/flatpickr/dist/themes/airbnb.css'
  ]).pipe(gulp.dest('dist/lib/themes'))

  gulp.src('src/html/*.pug')
    .pipe(pug({pretty: true}))
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

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 2063,
    livereload: true
  })
})

gulp.task('watch', function(){
  gulp.watch('src/**', ['build'])
})

gulp.task('dev', ['build', 'connect', 'watch'])
