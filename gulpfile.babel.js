'use strict';
import gulp from 'gulp';
import gutil from 'gulp-util'; // for logging
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import del from 'del'; // to delete dist/ driectory

import babel from 'gulp-babel';
import Cache from 'gulp-file-cache'; // dont't read unchanged file

import nodemon from 'gulp-nodemon'; // watch and restart express server

import webpack from 'gulp-webpack';
import webpackConfig from './webpack.config';

import browserSync from 'browser-sync';

let cache = new Cache();

const DIR = {
  SRC: 'src',
  PUBLIC: 'public',
	EXPRESS: 'express-app'
};

const SRC = {
  JS: DIR.SRC + '/js/*.js',
  CSS: DIR.SRC + '/css/*.css',
  HTML: DIR.SRC + '/*.html',
  IMAGES: DIR.SRC + '/images/*',
  EXPRESS: 'src/express/**/*.js',
	REACT: 'src/react/**/*.js'
};

const DEST = {
  JS: DIR.PUBLIC + '/js/',
  CSS: DIR.PUBLIC + '/css/',
  HTML: DIR.PUBLIC + '/',
  IMAGES: DIR.PUBLIC + '/images/',
  EXPRESS: 'express-app/',
	REACT: DIR.PUBLIC + '/js/'
};

//
gulp.task('babel', () => {
  return gulp.src(SRC.SERVER)
    .pipe(cache.filter())
    .pipe( babel({
      presets: ['es2015']
    }) )
    .pipe(cache.cache())
    .pipe( gulp.dest(DEST.SERVER) );
});

gulp.task('babel-express', () => {
  return gulp.src('src/express/app.js')
    // .pipe( cache.filter() )
    .pipe( babel({
      presets: ['es2015'],
      plugins: ["transform-runtime", "transform-async-to-generator"]
    }) )
    // .pipe( cache.cache() )
    .pipe( gulp.dest('express-app/') )
});

gulp.task('webpack-react', () => {
  return gulp.src('src/react/App.js')
    .pipe( webpack(webpackConfig.react) )
    .pipe( gulp.dest(DEST.REACT) )
});

gulp.task('webpack-browser', () => {
	return gulp.src('src/js/main.js')
		.pipe( webpack(webpackConfig.browser) )
		.pipe( gulp.dest(DEST.JS) )
})

gulp.task('css', () => {
  return gulp.src(SRC.CSS)
    .pipe( cleanCSS({compatibility: 'ie8'}) )
    .pipe( gulp.dest(DEST.CSS) );
});

gulp.task('html', () => {
  return gulp.src(SRC.HTML)
    .pipe( htmlmin({collapseWhitespace: true}) )
    .pipe( gulp.dest(DEST.HTML) );
});

gulp.task('images', () => {
  return gulp.src(SRC.IMAGES)
    .pipe( imagemin() )
    .pipe( gulp.dest(DEST.IMAGES) );
});

gulp.task('clean', () => {
  return del.sync([DIR.PUBLIC, DIR.EXPRESS]);
});

gulp.task('watch', () => {
  let watcher = {
    babel_express: gulp.watch(SRC.EXPRESS, ['babel-express']),
		webpack_react: gulp.watch(SRC.REACT, ['webpack-react']),
		webpack_browser: gulp.watch(SRC.JS, ['webpack-browser']),
    css: gulp.watch(SRC.CSS, ['css']),
    html: gulp.watch(SRC.HTML, ['html']),
    images: gulp.watch(SRC.IMAGES, ['images']),
    // babel: gulp.watch(SRC.SERVER, ['babel']),
  };

  let notify = event => {
    gutil.log(`File ${gutil.colors.yellow(event.path)} was ${gutil.colors.magenta(event.type)}`);
  }

  for(let key in watcher) watcher[key].on('change', notify);
});



gulp.task('start', ['babel-express'], () => {
  return nodemon({
    script: DEST.EXPRESS + '/app.js',
    watch: DEST.EXPRESS
  })
});

gulp.task('browser-sync', () => {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    files: ['public/**/*.*'],
    port: 7000
  })
});

gulp.task('default', ['clean', 'webpack-browser', 'webpack-react', 'css', 'html', 'images', 'watch', 'start', 'browser-sync'], () => {
  gutil.log('Gulp is running')
});
