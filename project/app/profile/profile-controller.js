"use strict";

var app = require('../app');

var profileController = function($scope, dataService, toastr) {
  $scope.basicInfo = dataService.getBasicInfoData();
  $scope.social = dataService.getSocialData();

  $scope.basicInfoEdit = angular.copy($scope.basicInfo);
  $scope.socialEdit = angular.copy($scope.social);

  $scope.saveBasicForm = function() {
    dataService.saveBasicInfo(angular.copy($scope.basicInfoEdit));
    $scope.basicInfo = angular.copy($scope.basicInfoEdit);
    toastr["success"]("Basic info saved successfully!");
  };

  $scope.saveSocialForm = function() {
    dataService.saveSocial(angular.copy($scope.socialEdit));
    $scope.social = dataService.getSocialData();
    toastr["success"]("Your social data is safe and sound now.", "It is saved successfully");
  };
};

app.controller("profileController", ['$scope', 'dataService', 'toastr', profileController]);

module.exports = app;
