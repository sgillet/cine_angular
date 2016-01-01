'use strict';

describe('Controller: InfoCtrl', function () {

  // load the controller's module
  beforeEach(module('cineAngularApp'));

  var InfoCtrl,
    routeParams,
    serviceAjax;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$routeParams_, _serviceAjax_) {
    
    routeParams = _$routeParams_;
    serviceAjax = _serviceAjax_;
    InfoCtrl = $controller('InfoCtrl', {
      'routeParams': routeParams,
      'serviceAjax': serviceAjax
      // place here mocked dependencies
    });
  }));

  it('should load a movie', function () {
    spyOn(serviceAjax, 'info').and.callFake(function() {
      return {
        'success': function(callback){
          callback({'title': 'django'});
        }
      };
    });
    InfoCtrl.loadMovie();
    expect(InfoCtrl.movie).toEqual({'title': 'django'});
  });
});
