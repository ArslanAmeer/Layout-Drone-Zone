const gulp = require("gulp");
const less = require("gulp-less");
const lessAutoPrefix = require("less-plugin-autoprefix");
const lessGLob = require("less-plugin-glob");
const cssMin = require("gulp-clean-css");
const jsMin = require("gulp-uglify-es").default;
const imageMin = require("gulp-imagemin");
const htmlMin = require("gulp-htmlmin");
const sourceMap = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

var lessPrefix = new lessAutoPrefix( { browsers: ["Last 2 Versions"]} );


// Creating TASKS

gulp.task("Html-Minify", () => {
    gulp.src("src/*.html")
        .pipe(htmlMin())
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
});

