(function() {
  'use strict';

    angular.module('app')
        .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['$http'];
    function loginFactory($http) {

      var exports = {
        attemptLogin: attemptLogin
      };

      var validUsers = [{
        name: 'Kelleigh Maroney',
        emailAddress: 'kelleigh.maroney@gmail.com',
        password: 'password'
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
            return Promise.reject('Invalid Email/Password Combination');
          }
        } else {
          return Promise.reject('Invalid Email/Password Combination');
        }
      }

      return exports;
    }
})();
