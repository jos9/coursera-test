(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch   = "";
  $scope.melding = "";
  
  $scope.maakMelding = function() {
     var arrayOfStrings = $scope.lunch.split(',');
     if ($scope.lunch == "") {
	     $scope.melding = "Please enter data first!" 
	 }
	 else if (arrayOfStrings.length < 4) {
	         $scope.melding = "Enjoy!" 
		  }
	  	  else {
		     $scope.melding = "Too much!"
	      };
  }
}

})();
