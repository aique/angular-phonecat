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
        $http.get('/data/phones/' + $routeParams.phoneSlug + '.json').success(function(data)
        {
            $scope.phone = data;
        });
    }]);

})();
