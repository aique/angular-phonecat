(function()
{
    var app = angular.module('phonecat', ['phone']);

    app.controller('userInfoCtrl', ['$scope', function($scope)
    {
        $scope.user =
        {
            name: 'Aique'
        };
    }]);

})();