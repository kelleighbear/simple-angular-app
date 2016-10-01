(function() {
  'use strict';

  angular.module('app')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['headerFactory'];
  function HeaderController(headerFactory) {
    var vm = this;
    vm.isLoggedIn = isLoggedIn;
    vm.logout = logout;

    function isLoggedIn() {
      vm.user = headerFactory.getUser();
      return vm.user ? true : false;
    }

    function logout() {
      headerFactory.setUser(null);
      vm.user = null;
    }
  }
})();
