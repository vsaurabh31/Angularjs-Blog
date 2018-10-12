"use strict";

var app = require('../app');

var blogPostController = function($scope, $location, $anchorScroll, dataService) {
  $scope.posts = [];
  $scope.postId;

  $scope.posts = dataService.getPostData();
  $scope.basicInfo = dataService.getBasicInfoData();
  $scope.social = dataService.getSocialData();

  $scope.focusOnPost = function(postId) {
    if (!postId) return;
    $location.hash('post' + postId);
    $anchorScroll();
  };
};

app.controller("blogPostController", ['$scope', '$location', '$anchorScroll', 'dataService', blogPostController]);

module.exports = app;
