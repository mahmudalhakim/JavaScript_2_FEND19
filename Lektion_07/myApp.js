// Skapa en Angular-modul
let myApp = angular.module("myApp" , []);

// Skapa en controller
myApp.controller("myCtrl", function ($scope) {

  // Egenskaper
  $scope.firstName = "";
  $scope.lastName = "";

  // Metoder
  $scope.fullName = function () {
    return $scope.firstName + ' ' + $scope.lastName;
  }
});