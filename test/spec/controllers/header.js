'use strict';

describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('cineAngularApp'));

  var HeaderCtrl,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $location) {
    location = $location;
    HeaderCtrl = $controller('HeaderCtrl', {
      'location' : location
    });
  }));

  it('should change location path upon search', function () {
    spyOn(location, 'path');
    HeaderCtrl.query = 'django';
    HeaderCtrl.searchAction();
    expect(location.path).toHaveBeenCalled();
  });
});
