[![Build status](https://img.shields.io/travis/chrisvogt/www.svg?branch=master&style=flat-square)](https://travis-ci.org/chrisvogt/www)
[![Code Climate](https://codeclimate.com/github/chrisvogt/www/badges/gpa.svg)](https://codeclimate.com/github/chrisvogt/www)
[![GitHub release](https://img.shields.io/github/release/chrisvogt/www.svg?style=flat-square)](https://github.com/chrisvogt/www/releases)
[![David.io Dev Dependencies](https://david-dm.org/chrisvogt/www/dev-status.svg?style=flat-square)](https://david-dm.org/chrisvogt/www?type=dev)
[![GitHub license](https://img.shields.io/github/license/chrisvogt/www.svg?style=flat-square)](https://github.com/chrisvogt/www/blob/master/LICENSE)

<p align="center">
  <img src="app/images/h-logo.png" alt="www.chrisvogt.me" width="680">
</p>

My personal website and project portfolio — originally based on a simple [Moqups design](https://app.moqups.com/chris@artinreality.com/81jSoAGytP/view/page/add529438) — though it has gone through _many_ iterations since.

Houly coding data is fetched from [stats.chrisvogt.me](https://github.com/chrisvogt/stats). Project data is stored in a [Firebase](https://firebase.google.com/) NoSQL database.

_View it live at [www.chrisvogt.me](https://www.chrisvogt.me)._

### How to use

* Run `npm install && bower install` to install [dev dependencies](https://david-dm.org/chrisvogt/www/?type=dev).
* Develop in a feature branch and submit pull requests against `master`.
* Use `gulp serve` to preview and watch for changes, with [BrowserSync](https://www.browsersync.io/) enabled.
* Use `gulp build` to output production-ready files to the _/dist_ directory.
* Use `gulp documentation` to rebuild the documentation.
* Use `gulp deploy` to push the contents of _/dist_ into the `gh-pages` branch.

### Screenshot

[View Screenshot](screenshot.jpg).

### License

[MIT](LICENSE) © [Chris Vogt](https://www.chrisvogt.me).

### Built with

<p align="left">
  <img src="https://bower.io/img/bower-logo.svg" alt="Bower.js" height="48">
  <img src="https://cdn.rawgit.com/gulpjs/artwork/master/gulp-2x.png" alt="Gulp" height="48">
  <img src="https://avatars0.githubusercontent.com/u/1335026?v=3&s=200" alt="Firebase" height="48">
	<img src="https://upload.wikimedia.org/wikipedia/en/9/9e/JQuery_logo.svg" alt="jQuery" height="48">
	<img src="https://upload.wikimedia.org/wikipedia/commons/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg" alt="HTML5 &amp; CSS3" height="48">
	<img src="https://cdn.rawgit.com/mathamoz/ionic-builder/898ac76dc9e9edeb02d1825358eca95ec742b985/public/images/why-the-yeti.svg" alt="Zurb Foundation" height="48">
</p>
