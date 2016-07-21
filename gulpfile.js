/**
 * Created by yanshi0429 on 16/6/13.
 */
var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var ngTemplate = require('gulp-angular-templatecache');

var distPath = "web/static/dist/";
var appPath = "web/static/app/";
var homePath = "web/static/home/";
var bowerPath = "web/static/bower_components/";

var bowerjs = [
    bowerPath + 'jquery/dist/jquery.js',
    bowerPath + 'lodash/dist/lodash.js',
    bowerPath + 'angular/angular.js',
    bowerPath + 'angular-ui-router/release/angular-ui-router.js',
    bowerPath + 'bootstrap/dist/js/bootstrap.js',
    bowerPath + 'angular-bootstrap/ui-bootstrap.js',
    bowerPath + 'angular-bootstrap/ui-bootstrap-tpls.js',
    bowerPath + 'w5c-validator/w5cValidator.js',
    bowerPath + 'bootstrap-validator/dist/validator.js',
];
var appjs = [
    appPath + 'init/app.js',
    appPath + 'init/init.js',
    appPath + 'init/route.js',
    appPath + 'my.tpl.app.js',
    appPath + 'user/top.js',
    appPath + 'init/service.js',
    appPath + 'common/nav/nav.js',
    appPath + 'common/slider/slider.js',
    appPath + 'common/aside/aside.js',
    appPath + 'hotspot/hotspot.js',
    appPath + 'hotspot/hotsportService.js',
    appPath + 'my.tpl.app.js'
];

var htmlMinOptions = {
    collapseBooleanAttributes    : true,
    collapseWhitespace           : true,
    removeAttributeQuotes        : true,
    removeComments               : true, // Only if you don't use comment directives!
    removeEmptyAttributes        : true,
    removeRedundantAttributes    : false,// it will remove attribute 'type="text"' if this set to true
    removeScriptTypeAttributes   : true,
    removeStyleLinkTypeAttributes: true
};


gulp.task('clear', function (cb) {
    del([distPath + '*.js', distPath + '*.css'], cb);
});


gulp.task('bower', function () {
    gulp.src(bowerjs).pipe(concat('common.js')).pipe(gulp.dest(distPath));
});
gulp.task('home',function(){
    gulp.src('web/static/home/css/*.less').pipe(less()).pipe(autoprefixer()).pipe(concat('home.css')).pipe(gulp.dest(distPath));
    gulp.src('web/static/home/js/*.js').pipe(concat('home.js')).pipe(gulp.dest(distPath));
});

gulp.task('app-tpl', function () {
    gulp.src(appPath + '**/*.html')
        .pipe(htmlmin(htmlMinOptions))
        .pipe(ngTemplate("my.tpl.app.js", {
            root  : "/app/",
            module: "my.app.tpls"
        })).pipe(gulp.dest(appPath));
});

gulp.task('app',function(){
    gulp.src('web/static/app/css/app.less').pipe(less()).pipe(autoprefixer()).pipe(concat('app.css')).pipe(gulp.dest(distPath));
    gulp.src(appjs).pipe(concat('app.js')).pipe(gulp.dest(distPath));
});


gulp.task('default', ['clear','bower','home','app']);