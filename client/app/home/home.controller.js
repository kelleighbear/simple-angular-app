(function() {
  'use strict';

  angular.module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
  function HomeController() {
    var home = this;
    home.message = 'Simple Angular Project';
  }
})();
