(function() {
  'use strict';

    angular.module('app')
        .service('headerService', headerService);

    headerService.$inject = ['$http'];
    function headerService($http) {

      var user = null;

      var exports = {
        getUser: getUser,
        setUser: setUser
      };

      function getUser() {
        return user;
      }

      function setUser(u) {
        user = u;
      }


      return exports;
    }
})();
