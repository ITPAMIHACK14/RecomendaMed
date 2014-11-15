'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('ResultCtrl', function ($scope, $rootScope, $location, Dataservice) {

        $scope.templateUrl = 'views/partials/itemResult.html';

        var items =  Dataservice.search($scope.mainSearch, $scope.ubicacion);

        $scope.items = items;

        $scope.displayItem = function(idItem){
            console.log("Display " + idItem);
            $rootScope.itemId = idItem;
            $location.path('/display');

        };

        $scope.buscar = function() {
        	$location.path('/resultado');
        };
    })
  .controller('DisplayCtrl', function ($scope, $rootScope, $location, Dataservice) {
        console.log("Displaying " + $rootScope.itemId);
        $scope.item=Dataservice.findByID($rootScope.itemId);

        $scope.calificar = function(qualif) {
            $scope.master = angular.copy(qualif);
        };

        $scope.reset = function() {
            $scope.qualif = angular.copy($scope.master);
        };
   });
