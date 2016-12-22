(function () {
    'use strict';

    angular
        .module('app')
        .component('newDefect', {
            templateUrl: 'app/features/defects/new-defect.component.html',
            controller: NewDefectController,
            controllerAs: 'vm'
        });

    function NewDefectController($state, localDataService) {
        var vm = this;

        vm.goToDefectList = goToDefectList;
        vm.save = save;
        vm.selectAssignedToUser = selectAssignedToUser;

        init();

        function init() {
            vm.dateReported = (new Date()).toLocaleDateString();
            vm.status = 'New';
            vm.reportedBy = 'Truyen Le (trle)';
            vm.assignedToList = localDataService.getListOfUsers();
        }

        function goToDefectList() {
            $state.go('home.defect-list');
        }

        function save() {
            vm.goToDefectList();
        }

        function selectAssignedToUser(user) {
            vm.assignedTo = user;
        }
    }
})();
