(function()
{
    var phone = angular.module('phone', ['filters', 'services', 'animations']);

    phone.directive('phoneList', function()
    {
        return {
            restrict: 'E',
            templateUrl: '/html/templates/phone-list.html',
            controller: 'phoneListCtrl'
        };
    });

    phone.controller('phoneListCtrl', ['$scope', 'Phones', function($scope, Phones)
    {
        $scope.defaultOrder = 'age';

        $scope.phones = Phones.query();
    }]);

    // Antigua versión del mismo controlador sin servicios personalizados, utilizando el servicio $http

    /*

    phone.controller('phoneListCtrl', ['$scope', '$http', function($scope, $http)
    {
        $scope.defaultOrder = 'age';

        $http.get('/data/phones.json').success(function(data)
        {
            $scope.phones = data;
        });
    }]);

    */

    phone.controller('phoneDetailCtrl', ['$scope', 'Phone', '$routeParams', function($scope, Phone, $routeParams)
    {
        Phone.get({phoneSlug: $routeParams.phoneSlug}, function(phone)
        {
            $scope.phone = phone;
            $scope.mainImg = $scope.phone.mainImg;
        });

        $scope.setMainImg = function(img) // se declara la función que permite modificar la variable del controlador
        {
            $scope.mainImg = img;
        }

        // se pueden declarar funciones privadas, simplemente no añadiendo la función al scope
    }]);

    // Antigua versión del mismo controlador sin servicios personalizados, utilizando el servicio $http

    /*

    phone.controller('phoneDetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams)
    {
        $scope.mainImg = null; // se declara la variable mainImg

        $http.get('/data/phones/' + $routeParams.phoneSlug + '.json').success(function(data)
        {
            $scope.phone = data;
            $scope.mainImg = data.mainImg;
        });

        $scope.setMainImg = function(img) // se declara la función que permite modificar la variable del controlador
        {
            $scope.mainImg = img;
        }
    }]);

    */

})();
