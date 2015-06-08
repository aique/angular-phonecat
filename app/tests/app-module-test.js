describe('Unit: PhonecatCotnroller', function()
{
    beforeEach(module('phonecat'));

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope)
    {
        scope = $rootScope.$new();
        ctrl = $controller('userInfoCtrl',{ $scope: scope });
    }));

    it('el nombre de usuario debe ser Aique',
    function()
    {
        expect(scope.user.name).toEqual('Aique');
    });
});