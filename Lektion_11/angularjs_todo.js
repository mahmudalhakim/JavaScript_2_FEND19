// Skapa en modul
let app = angular.module("myShoppingList", []);

// Skapa en controller
app.controller("myCtrl", function($scope) {

    // Skapa en array av produkter i skåpet
    $scope.products = ["Mjölk", "Bröd", "Ost"];

    // Metoden addItem lägger till en produkt i arrayen
    $scope.addItem = function () {

      // Test
      console.log($scope);
      console.log($scope.products);
      console.log($scope.addMe);
      
        // Om inputfältet är tomt visa ett felmeddelande och avsluta
        if (!$scope.addMe) {
          $scope.errortext = "Skriv minst ett tecken tack!";
          return;
        }

        // Om produkten saknas i arrayen pusha
        if ($scope.products.indexOf($scope.addMe) == -1) {
            
          $scope.products.push($scope.addMe);

          // Rensa ev. felmeddelande
          $scope.errortext = "";

        } 
        else {
          $scope.errortext = "Produkten finns redan i din lista!";
        }

        // Rensa inputfältet 
        $scope.addMe = "";

    }

    $scope.removeItem = function (product, $index) {
        
        console.log(product);
        console.log($index);

        const index = $scope.products.indexOf(product);
        console.log(index);

        $scope.errortext = "";
        $scope.products.splice(index, 1);
        
        // Vad är splice?
        // The splice() method adds/removes items to/from an array, and returns the removed item(s).
        // https://www.w3schools.com/jsref/jsref_splice.asp
    }

});