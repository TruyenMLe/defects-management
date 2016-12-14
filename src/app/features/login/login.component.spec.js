describe('login component', function () {
    beforeEach(module('app', function ($provide) {
        $provide.factory('login', function () {
            return {
                templateUrl: 'app/login/login.component.html'
            };
        });
    }));
    it('should render go to defect list button', angular.mock.inject(function ($rootScope, $compile) {
        var element = $compile('<app>Loading...</app>')($rootScope);
        $rootScope.$digest();
        var h1 = element.find('button');
        expect(h1.html()).toEqual('Go to defect list');
    }));
});
