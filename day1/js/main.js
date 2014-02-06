var App = angular.module('chatApp', ['ngRoute']);
	
	App.config(function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'main.tpl',
				controller : 'ProjectList'
			})
			.when('/detail/:id',{
				templateUrl: 'detail.tpl',
				controller : 'ProjectDetail'
			})
	});

	App.controller('ProjectList', function($scope){

		$scope.actionTime = function(){
			console.log('user', $scope.user);
		};
		
	});

	App.controller('ProjectDetail', function($scope, $routeParams){

		console.log('loading detail', $routeParams.id);

		$scope.artistId = $routeParams.id;
		
	});