'use strict';

/*global Firebase*/

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

App.run(['$firebaseSimpleLogin', '$rootScope', function($firebaseSimpleLogin, $rootScope){

  //reference to firebase
  var db = new Firebase("https://mdd1402.firebaseio.com/bands");
  //sets up simple login
  $rootScope.loginObject = $firebaseSimpleLogin(db);

}]);