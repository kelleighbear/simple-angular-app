(function() {
  'use strict';

  angular.module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
  function HomeController() {
    var vm = this;
    vm.message = 'Simple Angular Project';
  }
})();
