angular
    .module('app')
    .component('app', {
        templateUrl: 'app/hello.html',
        controller: function ($state) {
            this.hello = 'Hello World!';

            this.goToDefectList = function () {
                $state.go('defect-list');
            };
        }
    });
