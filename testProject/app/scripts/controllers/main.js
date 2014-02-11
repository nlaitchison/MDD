'use strict';

/*global App*/

App.controller('ProjectList', ['$scope', 'FireConn', function($scope, FireConn){

  // FireConn.$bind($scope, 'remoteData');

  $scope.bands = FireConn;

    console.log('home');

}]);

App.controller('ProjectDetail', ['$scope', '$routeParams', 'FireConn', function($scope, $routeParams, FireConn){

  console.log('loading detail', $routeParams.id);

  $scope.project = FireConn.$child($routeParams.id);

}]);

App.controller('ProjectNew', ['$scope', '$routeParams', 'FireConn', function($scope, $routeParams, FireConn){

  console.log('new project');

  var newProject = $scope.project;

  $scope.saveData = function(){
  	console.log('save');
  	FireConn.$add($scope.project);
  }

}]);

App.controller('MainCtrl', function($scope){

  $scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];

});

//make controllers like this
// .controller('NameCtrl', ['$scope', function ($scope) {



  // $scope.saveData = function(){

  // console.log('save');

  // $scope.remoteData.bands = [{
  // 	  id: 0,
  // 	  title: 'Enter Shikari',
  // 	  imgUrl: 'entershikari.jpg',
  // 	  shortDesc:'Biscuit tart cotton candy bear claw toffee. Liquorice tootsie roll powder sweet roll...',
  // 	  tags: ['post-hardcore', 'electronic', 'shikari-core']
  // 	},{
  // 	  id: 1,
  // 	  title: 'Bayside',
  // 	  imgUrl: 'bayside.jpg',
  // 	  shortDesc:'Jujubes candy sugar plum. Toffee chocolate cake applicake tiramisu...',
  // 	  tags: ['punk', 'alternative']
  // 	},{
  // 	  id: 2,
  // 	  title: 'Brand New',
  // 	  imgUrl: 'brandnew.jpg',
  // 	  shortDesc:'Candy canes topping macaroon cookie tootsie roll marzipan. Lollipop unerd...',
  // 	  tags: ['punk', 'pop punk', 'emo']
  // 	},{
  // 	  id: 3,
  // 	  title: 'Front Porch Step',
  // 	  imgUrl: 'frontporchstep.jpg',
  // 	  shortDesc:'Marshmallow cookie gingerbread liquorice marshmallow sugar plum cake toffee...',
  // 	  tags: ['acoustic', 'pop punk']
  // 	},{
  // 	  id: 4,
  // 	  title: 'Fake Problems',
  // 	  imgUrl: 'fakeproblems.jpg',
  // 	  shortDesc:'Donut danish chocolate bar ice cream tootsie roll croissant. Danish cotton candy...',
  // 	  tags: ['alternative', 'indie']
  // 	},{
  // 	  id: 5,
  // 	  title: 'The Neighborhood',
  // 	  imgUrl: 'theneighborhood.jpg',
  // 	  shortDesc:'Sugar plum candy canes ice cream cupcake sugar plum pastry...',
  // 	  tags: ['indie', 'alternative']
  // 	}];
  // };