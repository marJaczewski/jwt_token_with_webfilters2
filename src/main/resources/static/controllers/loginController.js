app.controller('loginController', function($scope, $http, $location, myFactory) {

    $scope.queryEmail = "";
    $scope.password = "";
$scope.zal="";
    $scope.doLogin = function () {


        $http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/logging/' + $scope.queryEmail + '/' + $scope.password)
            .success(function (result) {








            }).error(function (result) {

        })
    };


    $scope.unLogging = function(){


    };




});



app.factory('myFactory', function () {
    var userId = 0;
    var logged = false;
    var userEmail;
    var userRole;

    var service = {};

    service.getUser = function () { return userId; };
    service.setUser = function (userIdService){ userId =  userIdService; };

    service.getLogged = function(){return logged};
    service.setLogged = function(loggedParam){logged=loggedParam};

    service.getUserRole = function (){return userRole};
    service.setUserRole = function (role) {userRole=role};

    service.getUserEmail = function (){return userEmail};
    service.setUserEmail = function (email){userEmail=email};
    return service;
});
