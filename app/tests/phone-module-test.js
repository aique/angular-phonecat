describe('Unit: PhoneModule', function()
{
    beforeEach(module('phone'));

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope)
    {
        scope = $rootScope.$new();
        ctrl = $controller('phoneListCtrl',{ $scope: scope });
    }));

    it('la opción por defecto del selector de orden debe ser por nombre',
    function()
    {
        expect(scope.defaultOrder).toEqual('age');
    });
});