"use strict";

var app = require('../app');

var entriesController = function($scope, dataService, toastr) {
  $scope.basicInfo = dataService.getBasicInfoData();
  $scope.social = dataService.getSocialData();
  $scope.postEdit = angular.copy(dataService.getNewPostData());

  $scope.submitPost = function() {
    dataService.createPost($scope.postEdit);
    toastr["success"]("Your new post is published");
  };
};

app.controller("entriesController", ['$scope', 'dataService', 'toastr', entriesController]);

module.exports = app;
