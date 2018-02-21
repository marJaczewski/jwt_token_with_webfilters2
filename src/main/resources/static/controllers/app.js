var app = angular.module('mainModule', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider




        .when('/admin', {
            templateUrl:"/templates/admin.html",
            controller:'adminController'
        })



        .when('/home', {
            templateUrl:"/templates/home.html",
            controller:'homeController'
        })
        .when('/userAccount', {
            templateUrl:"/userTemplates/userAccount.html",
            controller:'userAccountController'
        })


        .when ('/login',{
            templateUrl:"/templates/login.html",
            controllerL:'loginController'
        })

        .otherwise({
            redirectTo: '/home',
            controller: 'homeController'
        })

    // $locationProvider.html5Mode(true);
    // $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});


