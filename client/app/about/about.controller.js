(function() {
  'use strict';

  angular.module('app')
    .controller('AboutController', AboutController);

  AboutController.$inject = [];
  function AboutController() {
    var home = this;
    home.message = 'This is the ABOUT page.';
  }

})();
