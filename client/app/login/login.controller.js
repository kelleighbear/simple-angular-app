(function() {
  'use strict';

    angular.module('app')
      .controller('LoginController', LoginController);

    LoginController.$inject = ['loginService'];
    function LoginController(loginService) {
      var vm = this;
      vm.message = 'Login Page';
    }
})();
