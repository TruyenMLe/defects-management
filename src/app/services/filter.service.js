(function () {
    'use strict';

    angular.module('app')
        .factory('filterService', function ($q) {
            return {
                saveNewFilter: saveNewFilter
            };

            function saveNewFilter() {
                var deferred = $q.defer();

                deferred.resolve({});

                return deferred.promise;
            }
        });
})();
