angular.module('quoteBook').controller('mainCtrl',function($scope, dataService){


$scope.quotes = dataService.getQuotes();

$scope.deleteMe = function(textToDelete){
  dataService.removeData(textToDelete);
};

$scope.addData = function(quote) {
  dataService.addData(quote);
  $scope.newQuote = {}; //to blank out the input value after adding
};


});
