'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.isActive = function (viewLocation) {
       var active = (viewLocation === $location.path());
       return active;
    };
  })
  .controller('familiar', function ($scope) {
  	$scope.updateElements = function(cantElements, elementsName) {
  		if ($scope[elementsName] == null) { $scope[elementsName] = [] }
  		var elements = $scope[elementsName];
  		while(cantElements > elements.length) { elements.push({}); }
  		while(cantElements < elements.length) { elements.pop(); }
  	}
  })
;

