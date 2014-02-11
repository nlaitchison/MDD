'use strict';

var App = angular.module('testProjectApp', [
  'ngRoute',
  'firebase'
]);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'views/projectList.tpl',
      controller : 'ProjectList'
    })
    .when('/detail/:id',{
      templateUrl: 'views/projectDetail.tpl',
      controller : 'ProjectDetail'
    })
    .when('/newProject',{
      templateUrl: 'views/projectNew.tpl',
      controller : 'ProjectNew'
    })
    .otherwise({
      redirectTo: '/'
    });
});