(function()
{
    var app = angular.module('phonecat', ['ngRoute', 'phone']);

    app.controller('userInfoCtrl', ['$scope', function($scope)
    {
        $scope.user =
        {
            name: 'Aique'
        };
    }]);

    app.config(['$routeProvider', function($routeProvider)
    {
        $routeProvider.
            when('/phones',
            {
                templateUrl: '/html/partials/phone-gallery.html'
            }).
            when('/phones/:phoneId',
            {
                templateUrl: '/html/partials/phone-detail.html',
                controller: 'phoneDetailCtrl'
            }).
            otherwise(
            {
                redirectTo: '/phones'
            });
    }]);

})();