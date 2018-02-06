var app = angular.module('mainApp', []);

app.controller('peopleCtrl', function ($scope, $http) {

  $http.get('https://majdule.github.io/angularjs-codedamn-tuts/database.json').then(function successCallBack(response) {
    $scope.persons = response.data.records;
    console.log($scope.persons);
  }).catch(function onError(response) {
    console.log("Error occured");
  })
});