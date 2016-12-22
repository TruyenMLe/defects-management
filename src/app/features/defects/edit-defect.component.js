(function () {
    'use strict';

    angular.module('app')
        .component('editDefect', {
            templateUrl: 'app/features/defects/edit-defect.component.html',
            controller: EditDefectController,
            controllerAs: 'vm'
        });

    function EditDefectController($state, $stateParams, localDataService) {
        var vm = this;

        vm.goToDefectList = goToDefectList;
        vm.save = save;

        init();

        function init() {
            vm.currentDefect = localDataService.getDefectDetails($stateParams.id);
        }

        function goToDefectList() {
            $state.go('home.defect-list');
        }

        function save() {
            vm.goToDefectList();
        }
    }
})();
