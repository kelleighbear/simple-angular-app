(function() {
  'use strict';

  angular.module('app')
    .controller('ContactController', ContactController);

  ContactController.$inject = [];
  function ContactController() {
    var home = this;
    home.message = 'This is the CONTACT page.';
  }

})();
