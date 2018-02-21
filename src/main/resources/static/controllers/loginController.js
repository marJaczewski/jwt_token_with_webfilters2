app.controller('loginController', function($scope, $http, $location, myFactory) {

    $scope.queryEmail = "";

    $scope.user={
      username : "",
      password : ""
    };

    $scope.loginResponse="";
    $scope.doLogin = function () {


        $http.post($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/login', $scope.user)
            .then(function (response) {
$scope.loginResponse=response;
myFactory.setToken(response.headers('Authorization'));
console.log(response.headers('Authorization'));

if(myFactory.getToken()!==null){
window.location.href="#userAccount";}
            }, function () {
alert("Blad logowania");
        })
    };


    $scope.unLogging = function(){


    };




});



app.factory('myFactory', function () {
   var token;
    var userId = 0;
    var logged = false;
    var userEmail;
    var userRole;

    var service = {};

    service.getToken = function() {return token};
    service.setToken = function(myToken) {token = myToken};

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
