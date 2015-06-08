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

    phone.controller('phoneListCtrl', ['$scope', function($scope)
    {
        $scope.phones = phones;
    }]);

    var phones = [
        {
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'
        },
        {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'
        },
        {
            'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'
        }
    ];

})();
