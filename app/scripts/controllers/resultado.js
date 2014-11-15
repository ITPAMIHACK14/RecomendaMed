'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('ResultCtrl', function ($scope, $rootScope, $location) {

        $scope.templateUrl = 'views/partials/itemResult.html';

        var items = [{id:1, nombre:"Hospital Italiano", direccion:"Peron 5555"  }, {id:2, nombre:"Los Arcos", direccion:"Juan b Justo 4444"  }, {id:3, nombre:"Cesar Milstein", direccion:"EEUU 4444"  }];

        $scope.items = items;

        $scope.displayItem = function(idItem){
            console.log("Display " + idItem);
            $rootScope.itemId = idItem;
            $location.path('/display');

        };

    })
  .controller('DisplayCtrl', function ($scope, $rootScope, $location) {
        console.log("Displaying " + $rootScope.itemId);
        $scope.item={id:1, nombre:"Hospital Italiano", direccion:"Peron 5555"  };
   })
