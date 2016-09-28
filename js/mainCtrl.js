angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {
  $scope.test = "Akshar";

  $scope.quotes = dataService.getData();

  $scope.deleteQuote = function(textToRemove) {
    dataService.removeData(textToRemove);
  }

  $scope.addDemQuotes = function(newQuote) {
    newQuote = {
    text: $scope.addQuote,
    author: $scope.addAuthor
  }
  dataService.addData(newQuote)
  }
})
