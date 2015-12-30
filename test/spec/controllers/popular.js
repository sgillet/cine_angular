'use strict';

describe('PopularCtrl', function () {

  // load the controller's module
  beforeEach(module('cineAngularApp'));

  var controller, serviceAjax;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _serviceAjax_) {
    serviceAjax = _serviceAjax_;
    controller = $controller('PopularCtrl', {
        'serviceAjax': serviceAjax
      });
  }));
  it('gets total_pages', function () {
    spyOn(serviceAjax, 'popular').and.callFake(function () {
      return {
        success: function (callback) {
          callback({ results: [{}],
            total_pages: 10
          });
        }
      };
    });
    controller.loadMovies();
    expect(controller.totalPages).toEqual(10);
  });
  it('calls loadMovies upon page change', function() {
    spyOn(controller, 'loadMovies');
    controller.pageChanged();
    expect(controller.loadMovies).toHaveBeenCalled();
  });
});
