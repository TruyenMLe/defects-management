(function () {
    'use strict';

    angular
        .module('app')
        .component('defectList', {
            templateUrl: 'app/features/defects/defect-list.component.html',
            controller: DefectListController,
            controllerAs: 'vm'
        });

    function DefectListController($state, $timeout, $document, filterService, $log, localDataService) {
        var vm = this;

        vm.goToAddNewDefect = goToAddNewDefect;
        vm.openAddFilterModal = openAddFilterModal;
        vm.removeAllFilters = removeAllFilters;
        vm.removeFilter = removeFilter;
        vm.removeSelectedSearchValue = removeSelectedSearchValue;
        vm.saveNewFilter = saveNewFilter;
        vm.setSearchField = setSearchField;
        vm.setSearchValue = setSearchValue;

        init();

        function init() {
            vm.selectedSearchValues = [];
            vm.defectFilters = [];
            vm.searchFields = localDataService.getListOfSearchFields();
            vm.defectList = localDataService.getListOfDefects();
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

        function removeFilter(filter, value) {
            filter.values = filter.values.filter(function (data) {
                return data.name !== value.name;
            });
        }

        function removeAllFilters() {
            vm.defectFilters = [];
        }
    }
})();
