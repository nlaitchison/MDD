'use strict';

var App = angular.module('testProjectApp', [
  'ngRoute',
  'firebase'
]);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'views/main.tpl',
      controller : 'ProjectList'
    })
    .when('/detail/:id',{
      templateUrl: 'views/detail.tpl',
      controller : 'ProjectDetail'
    })
    .otherwise({
      redirectTo: '/'
    });
});