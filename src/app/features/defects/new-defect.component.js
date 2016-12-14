angular
    .module('app')
    .component('newDefect', {
        templateUrl: 'app/features/defects/new-defect.component.html',
        controller: function ($state) {
            this.dateReported = (new Date()).toLocaleDateString();
            this.status = 'New';
            this.reportedBy = 'Truyen Le (trle)';
            this.goToDefectList = function () {
                $state.go('home.defect-list');
            };
            this.save = function () {
                this.goToDefectList();
            };
        }
    });
