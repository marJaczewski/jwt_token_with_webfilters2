app.controller('userAccountController', function($scope, $http, $location, myFactory){

    $scope.getTasks = function () {

        $http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/tasks/getTasks',{
            headers: {
                "Authorization": myFactory.getToken()
            }
            }
        ).success(function (result) {

        }).error(function () {
        })
    }

});

