var app = angular.module('books', ['ui.router'])

app.constant('_', window._);

app.config([ '$stateProvider', '$urlRouterProvider',
                  function($stateProvider, $urlRouterProvider) {

                    $urlRouterProvider.otherwise('/home');

                    $stateProvider
                      .state('home', {
                        url: '/home',
                        templateUrl: '/app/views/home.html',
                        controller: 'MainCtrl'
                      })
                      .state('fiction', {
                        url: '/fiction',
                        templateUrl: '/app/views/fiction.html',
                        controller: 'fictionCtrl'
                      })
                      .state('nonfiction', {
                        url: '/nonfiction',
                        templateUrl: '/app/views/nonfiction.html',
                        controller: 'nonFictionCtrl'
                      });

                    $urlRouterProvider.otherwise('home');
}]);