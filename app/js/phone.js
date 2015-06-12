(function()
{
    var phone = angular.module('phone', ['filters']);

    phone.directive('phoneList', function()
    {
        return {
            restrict: 'E',
            templateUrl: '/html/templates/phone-list.html',
            controller: 'phoneListCtrl'
        };
    });

    phone.controller('phoneListCtrl', ['$scope', '$http', function($scope, $http)
    {
        $scope.defaultOrder = 'age';

        $http.get('/data/phones.json').success(function(data)
        {
            $scope.phones = data;
        });
    }]);

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

})();
