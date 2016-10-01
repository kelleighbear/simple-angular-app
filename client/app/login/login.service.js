(function() {
  'use strict';

    angular.module('app')
        .service('loginService', loginService);

    loginService.$inject = ['$http'];
    function loginService($http) {

      var exports = {
        attemptLogin: attemptLogin
      };

      var validUsers = [{
        name: 'Kelleigh Maroney',
        emailAddress: 'kelleigh.maroney@gmail.com',
        password: 'derp123'
      }, {
        name: 'Frodo Baggins',
        emailAddress: 'frodo@gmail.com',
        password: 'hell0W0rld'
      }]

      function attemptLogin(formcontent) {
        var index = _.map(validUsers, 'emailAddress').indexOf(formcontent.emailAddress);
        if(index !== -1) {
          if(validUsers[index].password === formcontent.password) {
            var user = {
              name: validUsers[index].name,
              emailAddress: validUsers[index].emailAddress
            }
            return Promise.resolve(user);
          } else {
            return Promise.reject('Incorrect Password');
          }
        } else {
          return Promise.reject('No User with this Email Address Exists');
        }
      }

      return exports;
    }
})();
