'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
  .controller('HeaderCtrl', function ($location) {
    this.query = '';
    this.searchAction = function () {
      $location.path('/search/' + this.query);
    };
  });
