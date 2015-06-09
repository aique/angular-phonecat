describe('Unit: PhoneDetailScenarios', function()
{
    beforeEach(function()
    {
        browser.get('http://angular-phonecat.com#/phones/2');
    });

    it('debe mostrar el nombre correcto al entrar en el detalle del dispositivo Nexus', function()
    {
        expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
    });
});