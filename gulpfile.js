const gulp = require('gulp')
const pug = require("gulp-pug")
const stylus = require('gulp-stylus')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')

gulp.task('build:lib', function() {
  gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/flatpickr/dist/flatpickr.min.js',
    'node_modules/flatpickr/dist/flatpickr.min.css',
    'node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.css',
    'node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.js',
  ]).pipe(gulp.dest('dist/lib'))

  gulp.src([
    'node_modules/flatpickr/dist/l10n/zh.js'
  ]).pipe(gulp.dest('dist/lib/l10n'))

  gulp.src([
    'node_modules/flatpickr/dist/themes/airbnb.css'
  ]).pipe(gulp.dest('dist/lib/themes'))

})

gulp.task('build:html', function() {
  gulp.src('src/html/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

gulp.task('build:image', function() {
  gulp.src('src/image/**/*')
    .pipe(gulp.dest('dist/image'))
    .pipe(connect.reload())
})

gulp.task('build:style', function() {
  gulp.src('src/style/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/style'))
    .pipe(connect.reload())
})

gulp.task('build:script', function() {
  gulp.src('src/script/*.js')
    .pipe(babel({
			presets: ['env']
		}))
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
  gulp.watch('src/image/**', ['build:image'])
  gulp.watch('src/html/**', ['build:html'])
  gulp.watch('src/style/**', ['build:style'])
  gulp.watch('src/script/**', ['build:script'])
})

gulp.task('build', [
  'build:lib',
  'build:image',
  'build:html',
  'build:style',
  'build:script',
])

gulp.task('dev', ['build', 'connect', 'watch'])