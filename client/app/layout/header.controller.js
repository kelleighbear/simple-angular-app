(function() {
  'use strict';

  angular.module('app')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['headerService'];
  function HeaderController(headerService) {
    var vm = this;
    vm.user = headerService.getUser();
    vm.isLoggedIn = isLoggedIn;
    vm.logout = logout;

    function isLoggedIn() {
      return headerService.getUser() ? true : false;
    }

    function logout() {
      headerService.setUser(null);
      vm.user = null;
    }
  }
})();
