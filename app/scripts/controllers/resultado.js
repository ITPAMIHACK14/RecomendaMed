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

        var items =  Dataservice.search("");

        $scope.items = items;

        $scope.displayItem = function(idItem){
            console.log("Display " + idItem);
            $rootScope.itemId = idItem;
            $location.path('/display');

        };

    })
  .controller('DisplayCtrl', function ($scope, $rootScope, $location, Dataservice) {
        console.log("Displaying " + $rootScope.itemId);
        $scope.item=Dataservice.findByID("");;
   })
