(function() {
  'use strict';

  angular.module('app')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['headerService'];
  function HeaderController(headerService) {
    var vm = this;
    vm.isLoggedIn = isLoggedIn;
    vm.logout = logout;

    function isLoggedIn() {
      vm.user = headerService.getUser();
      return vm.user ? true : false;
    }

    function logout() {
      headerService.setUser(null);
      vm.user = null;
    }
  }
})();
