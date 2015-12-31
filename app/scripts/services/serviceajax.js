'use strict';

/**
 * @ngdoc service
 * @name cineAngularApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the cineAngularApp.
 */
angular.module('cineAngularApp')
.factory('serviceAjax', function serviceAjax($http) {
  return{
    search: function(query, page){
      return $http.get("http://localhost:3000/search?q=" + query + "&page=" + page);
    },
    popular: function(page){
      return $http.get("http://localhost:3000/popular?page=" + page);
    }
  }
});
