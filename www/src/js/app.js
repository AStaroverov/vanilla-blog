require('bootstrap-webpack!./bootstrap.config.js');
require("../sass/app.sass");

window.$ = require('jquery');
window._ = require('lodash');
require('gsap');

require('./initPage.js');