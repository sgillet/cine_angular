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

  it('calls right api url for popular page', function () {
    serviceAjax.popular(1);
    httpBackend.expectGET('http://localhost:3000/popular?page=1').respond({});
    httpBackend.flush();
  });
  it('calls right api url for search page', function () {
    serviceAjax.search('django', 1);
    httpBackend.expectGET('http://localhost:3000/search?q=django&page=1').respond({});
    httpBackend.flush();
  });
  it('calls the right api url for info page', function() {
    serviceAjax.info(1);
    httpBackend.expectGET('http://localhost:3000/info/1').respond({});
    httpBackend.flush();
  });
});
