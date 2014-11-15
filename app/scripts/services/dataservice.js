'use strict';

/**
 * @ngdoc service
 * @name hton1App.Randomservice
 * @description
 * # Randomservice
 * Service in the hton1App.
 */
angular.module('angularApp')
    .service('Dataservice',  function($http) {

    	var masterdata = [];

    	$http.get('data/bocasdeatencion.json').success (function(data){
				masterdata = angular.fromJson(data);
		});

        this.search = function(querySQL, ubicacion) {
        	var nombreRx = new RegExp(querySQL, 'i');
        	var ubicacionRx = new RegExp(ubicacion, 'i');

            var result = [];

            angular.forEach(masterdata, function(value){
        		if(result.length < 50 && (nombreRx.test(value.nombre) 
        			|| ubicacionRx.test(value.loc)
        			|| ubicacionRx.test(value.dpto)
        			|| ubicacionRx.test(value.pcia))){
        			result.push(value);
        		}
        	});

            return result;
        }

        this.findByID = function(id) {
        	var result = {};
        	angular.forEach(masterdata, function(value){
        		if(value.id == id){
        			result = value;
        		}
        	});
            return result;
        }
    });
