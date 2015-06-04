angular.module('WebApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/',  {
                controller: 'MainController',
                templateUrl:'partials/home.html'
        })
            .when('/about',  {
                controller: 'MainController',
                templateUrl:'partials/about.html'
        })
            .when('/get-involved',  {
                controller: 'MainController',
                templateUrl:'partials/get-involved.html'
        })
            .when('/who-we-are',  {
                controller: 'MainController',
                templateUrl:'partials/who-we-are.html'
        })
            .when('/news',  {
                controller: 'MainController',
                templateUrl:'partials/news.html'
        })
            .when('/gallery',  {
                controller: 'MainController',
                templateUrl:'partials/gallery.html'
        })        
            .otherwise({
                redirectTo:'/',  
                templateUrl:'partials/home.html'
        });
        
    $locationProvider.html5Mode({
        enabled:true
    });
   });



    
