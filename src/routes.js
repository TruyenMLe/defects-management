angular
    .module('app')
    .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            component: 'app'
        })
        .state('defect-list', {
            url: '/defects/list',
            component: 'defectList'
        })
        .state('new-defect', {
            url: '/defects/new',
            component: 'newDefect'
        });
}
