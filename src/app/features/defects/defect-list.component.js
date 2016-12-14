angular
    .module('app')
    .component('defectList', {
        templateUrl: 'app/features/defects/defect-list.component.html',
        controller: function ($state) {
            this.openDefectList = function () {
                this.active = !this.active;
            };
            this.goToAddNewDefect = function () {
                $state.go('home.new-defect');
            };
        }
    });
