(function() {
  'use strict';

    angular.module('app')
      .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state', 'loginFactory', 'headerFactory'];
    function LoginController($scope, $state, loginFactory, headerFactory) {
      var vm = this;

      // Functions
      vm.login = login;
      vm.clearForm = clearForm;

      // Variables
      vm.error = null;

      function login() {
        var success = function(response) {
          headerFactory.setUser(response);
          $state.go('^.home');
        };

        var error = function(reason) {
          vm.clearForm();
          vm.error = reason;
          // In AngularJS the results of promise resolution are propagated asynchronously, inside a $digest cycle.
          // So, callbacks registered with then() will only be called upon entering a $digest cycle.
          $scope.$apply();
        };

        loginFactory.attemptLogin(vm.formcontent).then(success, error);
      }

      function clearForm() {
        vm.formcontent = {};
        vm.form.$setPristine(true);
        vm.error = null;
      }
    }
})();
