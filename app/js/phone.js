(function()
{
    var phone = angular.module('phone', []);

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
        $http.get('/data/phones.json').success(function(data)
        {
            $scope.phone = null;

            var phones = data;

            var numPhones = phones.length;

            for(var i = 0 ; i < numPhones && $scope.phone == null ; i++)
            {
                var currentPhone = phones[i];

                if(currentPhone.id == $routeParams.phoneId)
                {
                    $scope.phone = currentPhone;
                }
            }
        });
    }]);

})();
