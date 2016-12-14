angular
    .module('app')
    .component('login', {
        templateUrl: 'app/features/login/login.component.html',
        controller: function ($state) {
            this.authenticate = function () {
                this.authenticated = true;
            };
            this.login = function () {
                $state.go('home.defect-list');
            };
        }
    });
