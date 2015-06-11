describe('Unit: PhonecatFilters', function()
{
    beforeEach(module('filters'));

    describe('checkmark', function()
    {
        it('este filtro debe convertir los valores booleanos en caracteres unicode', inject(function(checkmarkFilter)
        {
            expect(checkmarkFilter(true)).toBe('\u2713');
            expect(checkmarkFilter(false)).toBe('\u2718');
        }));
    });
});