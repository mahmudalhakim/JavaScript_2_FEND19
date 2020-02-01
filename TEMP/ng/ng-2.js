let myApp = angular.module("myApp", []);

myApp.controller("myCtrl", function() {
  this.firstName = "John";
  this.lastName = "Doe";

});


myApp.controller("myCtrl2", function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});


myApp.controller("personCtrl", function($scope) {
  $scope.firstName = "";
  $scope.lastName = "";
  $scope.fullName = function() {
    return $scope.firstName + " " + $scope.lastName;
  };
});


myApp.controller("carCtrl", function($scope) {
  $scope.cars = [
    { Regnr: "ABC123", Modell: "Volvo V40" },
    { Regnr: "XYZ987", Modell: "Volvo XC60" }
  ];
});

