(function () {
    'use strict';

    angular
        .module('app')
        .component('login', {
            templateUrl: 'app/features/login/login.component.html',
            controller: LoginController,
            controllerAs: 'vm'
        });

    function LoginController($state) {
        var vm = this;

        vm.authenticate = authenticate;
        vm.login = login;

        function login() {
            $state.go('home.defect-list');
        }

        function authenticate() {
            vm.authenticated = true;
        }
    }
})();
