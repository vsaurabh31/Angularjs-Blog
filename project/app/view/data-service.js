"use strict";

var app = require('../app');

var dataService = function(mockDataService) {
  this.data = [];
  this.data.push(mockDataService.getPost("Learn Angular from scratch", "Create cool projects learning AngularJS"));
  this.data.push(mockDataService.getPost("Java Algorithms and DS", "Become a Java PRO"));
  this.data.push(mockDataService.getPost("Learn Angular from scratch", "Create cool projects learning AngularJS"));
  this.data.push(mockDataService.getPost("Java Algorithms and DS", "Become a Java PRO"));

  this.newPost = {
    id: Math.random(),
    title: undefined,
    subtitle: undefined,
    content: undefined,
    messages: []
  };

  this.basicInfo = {
    name: "Saurabh Verma",
    introduction: "I am a creative, developing, optimistic and goal motivated person."
  };

  this.social = {
    works: 'Escale Solutions',
    lives: 'New Delhi',
    birthday: new Date('1996-05-05T05:00:00.000Z'),
    from: 'Agra'
  };
};

var proto = dataService.prototype;

proto.getNewPostData = function() {
  return this.newPost;
};

proto.getPostData = function() {
  return this.data;
};

proto.createPost = function(data) {
  this.data.unshift( angular.copy(data) );
};

proto.getBasicInfoData = function() {
  return this.basicInfo;
};

proto.saveBasicInfo = function(data) {
  this.basicInfo = data;
};

proto.getSocialData = function() {
  return this.social;
};

proto.saveSocial = function(data) {
  this.social = data;
};

app.service('dataService', ['mockDataService', dataService]);
