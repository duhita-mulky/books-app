angular.module('books').controller('MainCtrl', ['$scope', 'bookService', function($scope, bookService){
      $scope.allBooks = [];

      var bookPromise = bookService.getBooks();
      bookPromise.then(function(result){
          $scope.allBooks = result.data;
      });


    $scope.addBook = function(){
        if(!$scope.title || $scope.title == '') { return; }
        var addPromise = bookService.createBook($scope.title, $scope.priority, $scope.category);
        addPromise.then(function(result){
            $scope.title = '';
            $scope.priority = '';
        });
    };

    $scope.incrementPri = function(book) {
        if(book.priority <= 4) {
            book.priority += 1;
        }
        
    };

    $scope.decrementPri = function(book) {
        if(book.priority >= 1) {
            book.priority -= 1;
        }
        
    };
}]);