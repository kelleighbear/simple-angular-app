(function() {
    'use strict';

    angular.module('app')
        .controller('ContactController', ContactController);

    ContactController.$inject = [];

    function ContactController() {
        var vm = this;
        vm.submitForm = submitForm;
        vm.clearForm = clearForm;

        function submitForm() {
          alert(vm.formcontent.firstName + ' ' + vm.formcontent.lastName + ' (' + vm.formcontent.emailAddress + '), says: ' + vm.formcontent.message);
          vm.clearForm();
        }

        function clearForm() {
          vm.formcontent = {};
          vm.form.$setPristine(true);
        }
    }

})();
