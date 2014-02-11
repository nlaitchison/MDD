'use strict';

/* global Firebase */
angular.module('testProjectApp')
	.factory('FireConn', ['$firebase',function ($firebase) {

		var url = 'https://mdd1402.firebaseIO.com/bands',
			ref = new Firebase(url);

		return $firebase(ref);
	}]);

