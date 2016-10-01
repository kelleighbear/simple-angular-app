(function() {
  'use strict';

    angular.module('app')
        .factory('headerFactory', headerFactory);

    headerFactory.$inject = ['$http'];
    function headerFactory($http) {

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
