(function () {
    'use strict';

    angular
        .module('app')
        .component('newDefect', {
            templateUrl: 'app/features/defects/new-defect.component.html',
            controller: NewDefectController
        });

    function NewDefectController($state) {
        var vm = this;

        vm.goToDefectList = goToDefectList;
        vm.save = save;

        init();

        function init() {
            vm.dateReported = (new Date()).toLocaleDateString();
            vm.status = 'New';
            vm.reportedBy = 'Truyen Le (trle)';
        }

        function save() {
            vm.goToDefectList();
        }

        function goToDefectList() {
            $state.go('home.defect-list');
        }
    }
})();
