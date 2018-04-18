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

// Html Minify Task

gulp.task("Html-Minify", () => {
    gulp.src("src/*.html")
        .pipe(htmlMin())
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
});

// JavaScript Minify Task

gulp.task("Js-Minify", () => {
    gulp.src("src/assets/js/*.js")
        .pipe(rename("scripts.min.js"))
        .pipe(sourceMap.init())
        .pipe(jsMin())
        .pipe(sourceMap.write("/maps"))
        .pipe(gulp.dest("dist/assets/js/"))
        .pipe(browserSync.stream());
});

// Image Minify Task

gulp.task("IMage-Minify", () => {
    gulp.src("src/asstes/images/*")
        .pipe(imageMin())
        .pipe(gulp.dest("dist/assets/images/"))
});

// LESS Complier Task

gulp.task("Less", () => {
    gulp.src("src/assets/less/**.*less/")
    .pipe(sourceMap().init())
    .pipe(less({
        plugins: [lessAutoPrefix,lessGLob]
    }))
    .pipe(cssMin())
    .pipe(sourceMap.write("/maps"))
    .pipe(gulp.dest("dist/assets/css/"))
    .pipe(browserSync.stream());
})
