describe('Unit: PhoneListScenarios', function()
{
    beforeEach(function()
    {
        browser.get('http://angular-phonecat.com');
    });

    it('debe filtrar adecuadamente la lista de teléfonos en función del formulario de búsqueda', function()
    {
        var phoneList = element.all(by.repeater('phone in phones'));
        var query = element(by.model('query'));

        expect(phoneList.count()).toBe(3);

        query.sendKeys('nexus');
        expect(phoneList.count()).toBe(1);

        query.clear();

        query.sendKeys('motorola');
        expect(phoneList.count()).toBe(2);
    });
});