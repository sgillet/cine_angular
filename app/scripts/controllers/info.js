'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
  .controller('InfoCtrl', function ($routeParams, serviceAjax) {
    this.movie = {};
    this.id = $routeParams.id;
    this.loadMovie = function(id){
      var _this = this;
      serviceAjax.info(id).success(function(data) {
        _this.movie = data;
      });
    };
    this.loadMovie(this.id);
  });
