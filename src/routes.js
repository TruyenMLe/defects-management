angular
    .module('app')
    .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            component: 'login'
        })
        .state('home.defect-list', {
            url: '/defects/list',
            component: 'defectList'
        })
        .state('home.new-defect', {
            url: '/defects/new',
            component: 'newDefect'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'app/features/home/home.component.html'
        });
}
