(function()
{
    var filters = angular.module('filters', []);

    filters.filter('checkmark', function() // Los filtros se definen como un módulo más
    {
        return function(input)
        {
            return input ? '\u2713' : '\u2718';
        };
    });
})();