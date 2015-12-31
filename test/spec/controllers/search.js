'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('cineAngularApp'));

  var SearchCtrl,
      serviceAjax;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _serviceAjax_) {
    serviceAjax = _serviceAjax_;
    SearchCtrl = $controller('SearchCtrl', {
      'serviceAjax' : serviceAjax
      // place here mocked dependencies
    });
  }));

  it('load movies', function () {
    spyOn(serviceAjax, 'search').and.callFake(function() {
      return {
        'success' : function(callback) {
          callback({  results : [{}], 
                      total_pages : 10
          });
        }
      };
    });
    SearchCtrl.loadMovies();
    expect(SearchCtrl.movies).toEqual([{}]);
    expect(SearchCtrl.totalPages).toEqual(10);
  });
  it('load movies upon page change', function() {
    spyOn(SearchCtrl, 'loadMovies');
    SearchCtrl.pageChanged();
    expect(SearchCtrl.loadMovies).toHaveBeenCalled();
  });
});
