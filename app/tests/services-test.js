describe('Unit: Servicios', function()
{
    beforeEach(function()
    {
        this.getEnv().addMatchers(
        {
            toEqualData: function(expected)
            {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('phone'));
    beforeEach(module('services'));

    describe('PhoneListCtrl', function()
    {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller)
        {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json').

            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]); // se define la respuesta que devolverá el servicio

            scope = $rootScope.$new();
            ctrl = $controller('phoneListCtrl', {$scope: scope});
        }));

        it('debe crear los dos teléfonos que se han definido en la respuesta', function() {
            expect(scope.phones).toEqualData([]);
            $httpBackend.flush();

            expect(scope.phones).toEqualData(
                [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        });


        it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('age');
        });
    });

    describe('PhoneDetailCtrl', function()
    {
        var scope, $httpBackend, ctrl,
            xyzPhoneData = function() // se define la respuesta que devolverá el servicio
            {
                return {
                    name: 'phone xyz',
                    images: ['image/url1.png', 'image/url2.png']
                }
            };

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller)
        {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

            $routeParams.phoneId = 'xyz';
            scope = $rootScope.$new();
            ctrl = $controller('phoneDetailCtrl', {$scope: scope});
        }));


        it('debe obtener el detalle del modelo definido en la respuesta', function()
        {
            expect(scope.phone).toEqualData({});
            $httpBackend.flush();

            expect(scope.phone).toEqualData(xyzPhoneData());
        });
    });
});