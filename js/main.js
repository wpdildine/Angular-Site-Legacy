//routing
$(document).ready(function() {
    // This command is used to initialize some elements and make them work properly
    $.material.init();
    
    $('.modal').on('show.bs.modal', function () {
    if ($(document).height() > $(window).height()) {
        // no-scroll
        $('body').addClass("modal-open-noscroll");
    }
    else {
        $('body').removeClass("modal-open-noscroll");
    }
    })
    $('.modal').on('hide.bs.modal', function () {
        $('body').removeClass("modal-open-noscroll");
    })
    
    $(".submenu").hide();
    
    $(".multi-level")
        .mouseover(function(){
            $(".submenu").show();             
        })
        .mouseleave(function(){
            $(".submenu").hide();
        });

});   


var singlePage = angular.module('singlePage', ['ngRoute', 'ui.bootstrap','feeds']);

singlePage.controller('mainController', function($scope){
    $scope.message = 'Working';
});

singlePage.config(function($routeProvider){
    $routeProvider
            .when('/',  {
                controller: 'mainController',
                templateUrl:'partials/home.html'
        })
            .when('/about',  {
                controller: 'mainController',
                templateUrl:'partials/about.html'
        })
            .when('/get-involved',  {
                controller: 'mainController',
                templateUrl:'partials/get-involved.html'
        })
            .when('/who-we-are',  {
                controller: 'mainController',
                templateUrl:'partials/who-we-are.html'
        })
            .when('/news',  {
                controller: 'mainController',
                templateUrl:'partials/news.html'
        })
            .when('/gallery',  {
                controller: 'mainController',
                templateUrl:'partials/gallery.html'
        })        
            .otherwise({
                redirectTo:'/',  
                templateUrl:'partials/home.html'
        });

});

//gallery viewer

singlePage.controller('folderCtrl', function ($scope, $http) {
  $scope.w = window.innerWidth;
  $scope.h = window.innerHeight-20;
  $scope.uri = "http://lorempixel.com";
  $scope.folders = [
    'abstract',
    'animals',
    'business',
    'cats',
    'city',
    'food',
    'night',
    'life',
    'fashion',
    'people',
    'nature',
    'sports',
    'technics',
    'transport'
  ];
  $scope.images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  $scope.currentFolder = $scope.folders[0];
  $scope.selectFolder = function (folder) {
    $scope.currentFolder = folder;
  };
  $scope.activeFolder = function (folder) {
    return (folder === $scope.currentFolder) ? 'active' : '';
  };
});
    
    
//rss


