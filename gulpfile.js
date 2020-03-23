const gulp = require('gulp');
const connect = require('gulp-connect');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const purgecss = require('gulp-purgecss');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const ejs = require("gulp-ejs");
const pxtorem = require('gulp-pxtorem');
const postcss = require('gulp-postcss')

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g);
    }
}

function Fonts(done) {
    gulp.src("src/css/fonts/*.*")
        .pipe(gulp.dest("dist/assets/css/fonts/"))
        .pipe(connect.reload());
    done()
}

function Images(done) {
    gulp.src("src/images/**/*.*")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images/'))
        .pipe(connect.reload());
    done();
}

function JS(done) {
    gulp.src("src/javascript/**/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/assets/javascript'))
        .pipe(connect.reload());
    done();
}

function Html(done) {
    gulp.src("./src/html/templates/*.ejs")
        .pipe(ejs())
        .pipe(rename(function (path) {
            if (path.basename != "index") {
                path.dirname = path.basename;
                path.basename = "index";
            }
            path.extname = ".html"
        }))
        .pipe(gulp.dest("./dist"))
        .pipe(connect.reload());
    done()
}

function CSS(done) {
    gulp.src("src/css/main.css")
        .pipe(postcss([
            require('postcss-import'),
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer')
        ]))
        .pipe(pxtorem({ map: true }))
        .pipe(
            purgecss({
                content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.ejs'],
                extractors: [
                    {
                        extractor: TailwindExtractor,
                        extensions: ['html']
                    }
                ],
                whitelist: ['is-active', 'hidden'],
                keyframes: true
            })
        )
        .pipe(cleanCSS({ compatibility: "ie7" }))
        .pipe(gulp.dest('dist/assets/css/'))
        .pipe(connect.reload());
    done();
}

function watchDev() {
    gulp.watch("src/images/**/*.*", { ignoreInitial: false }, Images);
    gulp.watch("src/html/**/*.ejs", { ignoreInitial: false }, Html);
    gulp.watch("src/css/**/*.css", { ignoreInitial: false }, CSS);
    gulp.watch("src/html/**/*.ejs", CSS);
    gulp.watch("./tailwind.config.js", CSS);
    gulp.watch("src/css/fonts/*.*", { ignoreInitial: false }, Fonts);
    gulp.watch("src/javascript/**/*.js", { ignoreInitial: false }, JS);
}

gulp.task("dev", function (done) {
    watchDev();
    connect.server({
        root: 'dist',
        livereload: true
    });

    done();
});