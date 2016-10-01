(function() {
  'use strict';

    angular.module('app')
      .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'loginService', 'headerService'];
    function LoginController($state, loginService, headerService) {
      var vm = this;

      // Functions
      vm.login = login;
      vm.clearForm = clearForm;

      // Variables
      vm.error = null;

      function login() {
        var success = function(response) {
          headerService.setUser(vm.formcontent);
          $state.go('^.home');
        };

        var error = function(reason) {
          vm.clearForm();
          vm.error = reason;
        };

        loginService.attemptLogin(vm.formcontent).then(success, error);
      }

      function clearForm() {
        vm.formcontent = {};
        vm.form.$setPristine(true);
        vm.error = null;
      }
    }
})();
