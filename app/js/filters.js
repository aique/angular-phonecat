(function()
{
    var filters = angular.module('filters', []); // Los filtros se definen como un módulo más

    filters.filter('checkmark', function()
    {
        return function(input)
        {
            return input ? '\u2713' : '\u2718';
        };
    });
})();