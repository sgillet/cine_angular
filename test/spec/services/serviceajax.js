'use strict';

describe('Service: serviceAjax', function () {

  // load the service's module
  beforeEach(module('cineAngularApp'));

  // instantiate service
  var serviceAjax, httpBackend;
  beforeEach(inject(function (_serviceAjax_, _$httpBackend_) {
    serviceAjax = _serviceAjax_;
    httpBackend = _$httpBackend_;
  }));

  it('call the right api url', function () {
    serviceAjax.popular(1);

    httpBackend.expectGET('http://localhost:3000/popular?page=1').respond({});

      httpBackend.flush();

  });

});
