"use strict";

var jquery = require('jquery');
var angular = require('angular');

require('angular-toastr');
require('@uirouter/angularjs');
require('./app');

// controllers
require('./home-controller');
require('./view/blog-post-controller');
require('./profile/profile-controller');
require('./entries/entries-controller');

// directives
require('./view/blog-post-directive');

//services
require('./view/mock-data-service');
require('./view/data-service');
