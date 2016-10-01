(function() {
  'use strict';

  angular.module('app')
    .controller('AboutController', AboutController);

  AboutController.$inject = [];
  function AboutController() {
    var vm = this;
    vm.message = 'About This Project';
  }

})();
