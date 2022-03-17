const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Sass Task
function scssTask(){
  return src('./src/assets/scss/main.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(dest('./src/assets/css', { sourcemaps: '.' }));
}

// Watch Task
function watchTask(){
  watch(['./src/assets/scss/**/*.scss'], series(scssTask));
}

// Default Gulp task
exports.default = series(
  scssTask,
  watchTask
);
