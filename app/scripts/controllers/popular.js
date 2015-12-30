'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
  .controller('PopularCtrl', function (serviceAjax) {
        this.currentPage = 1;
        this.totalPages = 0;
        this.movies = [];
        this.loadMovies = function(){
            var _this = this;
            this.loading = true;
            serviceAjax.popular(this.currentPage).success(function(data){
                _this.movies = data.results;
                _this.totalPages = data.total_pages;
                _this.loading = false;
            });
        };
        this.pageChanged = function(){
            this.loadMovies();
        };
        this.loadMovies();
  });
