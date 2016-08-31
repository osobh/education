(function() {

  'use strict';

  angular.module('interceptorApp')
    .factory('RequestService', function RequestService(){
      var token = null;

      var setToken = function setToken(someToken) {
          token = someToken;
      }

      var getToken = function getToken() {
          return token;
      }

      var request = function request(config) {
          if (token) {
              // jqXHR.setRequestHeader('Authorization','Token token="' + app.user.api_key.access_token + '"');
                config.headers['Authorization'] = 'Token token="' + token + '"';
            }
            return config;
      }

      return {
          setToken: setToken,
          getToken: getToken,
          request: request
      }
    })

    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('RequestService');
    }]);

}());
