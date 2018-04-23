
// Requiring Packages!

const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const less = require("gulp-less");
const cleanCss = require("gulp-clean-css");
const jsmin = require("gulp-uglify-es").default;
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const sourcemaps = require("gulp-sourcemaps");
const LessAutoprefix = require("less-plugin-autoprefix");
const BrowserSync = require("browser-sync").create();

var autoprefix = new LessAutoprefix({ browsers: ["last 2 versions"] });

var lessDir = "src/assets/less/";

// Tasks: Minify and Compile

gulp.task("html-minify", function () {
    gulp.src("src/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist"));
});

gulp.task("image-minify", () =>
    gulp.src("src/assets/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/assets/images"))
);

gulp.task("js-minify", function(){
    gulp.src("src/assets/js/*.js")
        .pipe(sourcemaps.init())
        .pipe(concat("allscript.min.js"))
        .pipe(jsmin())
        .pipe(sourcemaps.write("/maps"))
        .pipe(gulp.dest("dist/assets/js/"))
        .pipe(BrowserSync.stream());
});

gulp.task("less", function () {
    gulp.src(lessDir + "main.less")
        .pipe(rename("allstyle.min.css"))
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [autoprefix, require("less-plugin-glob")]
        }))
        .pipe(cleanCss())
        .pipe(sourcemaps.write("/maps"))
        .pipe(gulp.dest("dist/assets/css/"))
        .pipe(BrowserSync.stream());
});

gulp.task("copy-fonts", function () {
    gulp.src("src/assets/fonts/*")
        .pipe(gulp.dest("dist/assets/fonts/"))
});


// Tasks: Watch, Build and Serve

gulp.task("serve", function () {
    BrowserSync.init({
        server: "dist",
        port: 2712,
        // host: "192.168.10.66",
        browser: "Firefox"
    });
    gulp.watch("src/*.html", ["html-minify"]);
    gulp.watch("src/assets/images/*", ["image-minify"]);
    gulp.watch("src/assets/fonts/*", ["copy-fonts"]);
    gulp.watch("src/assets/js/*.js",["js-minify"])
    gulp.watch(lessDir + "**/*.less", ["less"]);
    gulp.watch("dist/*.html").on("change", BrowserSync.reload);
});


// Tasks: Default Build Trigger

gulp.task("default", ["copy-fonts", "html-minify", "image-minify", "js-minify", "less", "serve"]);