var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/page.html'
    })
    .when('/helloUser', {
      templateUrl: 'pages/hello.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});