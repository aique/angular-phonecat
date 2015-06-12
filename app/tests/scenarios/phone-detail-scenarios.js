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

    it('debe mostrar adecuadamente la imagen principal al entrar en el detalle', function()
    {
        expect(element(by.css('.large-img')).getAttribute('src')).toMatch(/img\/phones\/nexus-s\/1.jpg/);
    });
    
    it('debe cambiar adecuadamente la imagen principal cuando se hace click en las imágenes de la galería', function()
    {
        element(by.css('.phone-thumbs li:nth-child(0) img')).click();
        expect(element(by.css('.large-img')).getAttribute('src')).toMatch(/img\/phones\/nexus-s\/1.jpg/);

        element(by.css('.phone-thumbs li:nth-child(1) img')).click();
        expect(element(by.css('.large-img')).getAttribute('src')).toMatch(/img\/phones\/nexus-s\/2.jpg/);
    });
});