// http://jbavari.github.io/blog/2014/06/20/testing-interceptor-headers-in-angularjs/

"use strict";

describe("Service Unit Tests", function() {
  var httpProviderIt;
  var $httpBackend;
  var RequestService;
  var token = 'someToken';

  beforeEach(function() {
    module('interceptorApp', function ($httpProvider) {
      //save our interceptor
      httpProviderIt = $httpProvider;
    });

    inject(function (_RequestService_, _$httpBackend_) {
      RequestService = _RequestService_;
      $httpBackend = _$httpBackend_;
    })
  });

  describe('RequestService Tests', function() {

    it('should have RequestService be defined', function () {
      expect(RequestService).to.be.defined;
    });

    it('should properly set an api token', function() {
      expect(RequestService.getToken()).to.be.null;
      RequestService.setToken(token);
      expect(RequestService.getToken()).to.eq(token);
    });

    it('should have no api token upon start up', function() {
      var token = RequestService.getToken();
      expect(token).to.be.null;
    });

    describe('HTTP tests', function () {

      it('should have the RequestService as an interceptor', function () {
        expect(httpProviderIt.interceptors).to.contain('RequestService');
      });

      it('should token in the headers after setting', function() {
        RequestService.setToken(token);
        $httpBackend.when('GET', 'http://example.com', null, function(headers) {
          expect(headers.Authorization).to.eq(token);
        }).respond(200, {name: 'example' });
      });

      it('should not place a token in the http request headers if no token is set', function() {
        var config = RequestService.request({headers: {} });
        expect(config.headers['Authorization']).to.eq(undefined);
      });

      it('should place a token in the http request headers after a token is set', function() {
        RequestService.setToken(token);
        var config = RequestService.request({headers: {} });
        expect(config.headers['Authorization']).to.eq('Token token="' + token + '"');
      });
    });

  });

});
