(function () {
    'use strict';

    angular
        .module('app')
        .component('defectList', {
            templateUrl: 'app/features/defects/defect-list.component.html',
            controller: DefectListController,
            controllerAs: 'vm'
        });

    function DefectListController($state, $timeout, $document, filterService, $log) {
        var vm = this;

        vm.openDefectList = openDefectList;
        vm.goToAddNewDefect = goToAddNewDefect;
        vm.setSearchField = setSearchField;
        vm.openAddFilterModal = openAddFilterModal;
        vm.removeSelectedSearchValue = removeSelectedSearchValue;
        vm.saveNewFilter = saveNewFilter;
        vm.setSearchValue = setSearchValue;

        init();

        function init() {
            vm.selectedSearchValues = [];
            vm.defectFilters = [];
            vm.searchFields = [
                { label: 'Assigned To', values: [{ name: 'Truyen Le' }, { name: 'Alex Lovato' }] },
                { label: 'Change Identifier', values: [{ name: '1' }, { name: '2' }, { name: '3' }] },
                { label: 'Date Reported', values: [{ name: '12/01/2016' }, { name: '12/02/2016' }, { name: '12/03/2016' }] },
                { label: 'Priority', values: [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }] },
                { label: 'Reported By', values: [{ name: 'Truyen Le' }, { name: 'Alex Lovato' }] },
                { label: 'Severity', values: [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }] },
                { label: 'Summary', values: [{ name: 'Ideas' }, { name: 'Trust' }, { name: 'Technology' }] }
            ];
        }

        function openDefectList() {
            vm.active = !vm.active;
        }

        function goToAddNewDefect() {
            $state.go('home.new-defect');
        }

        function setSearchField(searchField) {
            vm.selectedSearchField = (vm.selectedSearchField === searchField.label) ? '' : searchField.label;
            vm.searchValues = searchField.values ? angular.fromJson(angular.toJson(searchField.values)) : [];

            if (vm.selectedSearchField) {
                angular.forEach(vm.defectFilters, function (data) {
                    if (data.label === vm.selectedSearchField) {
                        vm.selectedSearchValues = vm.selectedSearchValues.concat(data.values);
                    }
                });
            }

            $timeout(function () {
                $document[0].querySelector('#searchValueQry').focus();
            });
        }

        function setSearchValue(searchValue) {
            var existingSearchValue;
            angular.forEach(vm.selectedSearchValues, function (data) {
                if (data.name === searchValue.name) {
                    existingSearchValue = true;
                }
            });

            if (!existingSearchValue) {
                vm.selectedSearchValues.push(searchValue);
            }

            vm.searchValueQry = null;
        }

        function removeSelectedSearchValue(searchValue) {
            vm.selectedSearchValues = vm.selectedSearchValues.filter(function (data) {
                return searchValue.name !== data.name;
            });

            if (!vm.selectedSearchValues.length) {
                $timeout(function () {
                    $document[0].querySelector('#searchValueQry').focus();
                });
            }
        }

        function openAddFilterModal() {
            $timeout(function () {
                $document[0].querySelector('#searchFieldQry').focus();
            }, 500);
        }

        function saveNewFilter() {
            var existingFilter = vm.defectFilters.filter(function (data) {
                return data.label === vm.selectedSearchField;
            });

            if (existingFilter && existingFilter.length) {
                existingFilter[0].values = vm.selectedSearchValues;
            } else {
                vm.defectFilters.push({
                    label: vm.selectedSearchField,
                    values: angular.fromJson(angular.toJson(vm.selectedSearchValues))
                });
            }

            filterService.saveNewFilter()
                .then(function (response) {
                    if (response) {
                        $log.info(response);
                    }

                    vm.selectedSearchField = null;
                    vm.selectedSearchValues = [];
                })
                .catch(function () {
                    $log.error('Error saving new filter');
                });
        }
    }
})();
