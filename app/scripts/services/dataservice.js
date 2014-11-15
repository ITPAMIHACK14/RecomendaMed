'use strict';

/**
 * @ngdoc service
 * @name hton1App.Randomservice
 * @description
 * # Randomservice
 * Service in the hton1App.
 */
angular.module('angularApp')
    .service('Dataservice',  function() {
        this.search = function(querySQL) {

            var result = [{id:1, nombre:"Hospital Italiano", direccion:"Peron 5555"  }, {id:2, nombre:"Los Arcos", direccion:"Juan b Justo 4444"  }, {id:3, nombre:"Cesar Milstein", direccion:"EEUU 4444"  }];

            return  result;
        }

        this.findByID = function(id) {
            return {id:1, nombre:"Hospital Italiano", direccion:"Peron 5555"  };
        }
    });
