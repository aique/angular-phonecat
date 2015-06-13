(function()
{
    var services = angular.module('services', ['ngResource']);

    // se declara el nombre del servicio y la función de factorización

    services.factory('Phones', ['$resource', function($resource) // se hace uso del servicio $resource para realizar peticiones REST
    {
        return $resource('/data/phones.json', {},
        {
            query: {method: 'GET', isArray: true}
        });
    }]);

    services.factory('Phone', ['$resource', function($resource) // se hace uso del servicio $resource para realizar peticiones REST
    {
        return $resource('/data/phones/:phoneSlug.json', {},
        {
            get: {method: 'GET', params: {phoneSlug: '@slug'}}
        });
    }]);

})();