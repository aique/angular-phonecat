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

    it('debe ordenar adecuadamente en función del valor del selector de orden del formulario', function()
    {
        var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));

        var query = element(by.model('query'));

        function getNames()
        {
            return phoneNameColumn.map(function(elm)
            {
                return elm.getText();
            });
        }

        element(by.model('order')).element(by.css('option[value="age"]')).click();

        expect(getNames()).toEqual(
            [
                "Motorola XOOM\u2122 with Wi-Fi",
                "Nexus S",
                "MOTOROLA XOOM\u2122"
            ]);

        query.sendKeys('tablet');

        expect(getNames()).toEqual(
        [
            "Motorola XOOM\u2122 with Wi-Fi",
            "MOTOROLA XOOM\u2122"
        ]);

        element(by.model('order')).element(by.css('option[value="name"]')).click();

        expect(getNames()).toEqual(
        [
            "MOTOROLA XOOM\u2122",
            "Motorola XOOM\u2122 with Wi-Fi"
        ]);

        element(by.model('order')).element(by.css('option[value="age"]')).click();

        expect(getNames()).toEqual(
        [
            "Motorola XOOM\u2122 with Wi-Fi",
            "MOTOROLA XOOM\u2122"
        ]);
    });

    it('debe mostrar los enlaces adecuados por cada producto', function()
    {
        var query = element(by.model('query'));

        query.clear();
        query.sendKeys('nexus');

        element.all(by.css('#phone-list li a')).first().click();

        browser.getLocationAbsUrl().then(function(url)
        {
            expect(url).toBe('/phones/1');
        });
    });

    it('debe redirigir la home añadiendo #/phones', function()
    {
        browser.get('http://angular-phonecat.com');

        browser.getLocationAbsUrl().then(function(url)
        {
            expect(url).toBe('/phones');
        });
    });
});