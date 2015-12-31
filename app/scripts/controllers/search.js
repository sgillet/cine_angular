'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
  .controller('SearchCtrl', function ($routeParams, serviceAjax) {
    this.query = $routeParams.query;
    this.currentPage = 1;
    this.totalPages = 0;
    this.movies = [];

    this.loadMovies = function() {
      var _this = this;
      serviceAjax
        .search(this.query, this.currentPage)
        .success(function(data){
          _this.movies = data.results;
          _this.totalPages = data.total_pages;
        });
    };
    this.pageChanged = function() {
      this.loadMovies();
    }
    this.loadMovies();
  });
