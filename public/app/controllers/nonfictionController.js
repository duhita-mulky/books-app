angular.module('books').controller('nonFictionCtrl', ['$scope', 'bookService', function($scope, bookService){

    $scope.booksNonFiction = [];
    $scope.name = '';
    $scope.priority = 0;
    $scope.category = 'NONFICTION';

    var bookPromise = bookService.getBooksByCategory("NONFICTION");
      bookPromise.then(function(result){
          $scope.booksNonFiction = result.data;
      });

    $scope.refresh = function() {
            var bookPromise = bookService.getBooksByCategory("NONFICTION");
            bookPromise.then(function(result){
                $scope.booksNonFiction = result.data;
            });
    } 

    $scope.deleteBook = function(book) {
        bookService.deleteBookWithId(book._id)
            .then(function(result){
                $scope.refresh();
            }, function(err){
                console.log(err);
            })
    }

    $scope.addBook = function(){
        if(!$scope.name || $scope.name == '' || $scope.priority < 1 || $scope.priority > 5) { return; }
        bookService.createBook($scope.name, $scope.priority, $scope.category);
        $scope.title = '';
        $scope.priority = 0;
        $scope.category = 'NONFICTION';
        $scope.refresh();
    };

    $scope.incrementPri = function(book) {
        if(book.priority <= 5) {
            bookService.incrementPriority(book)
                .then(function(result){
                    $scope.refresh()
                }, function(err){
                    console.log(err);
                });
        }
    };

    $scope.decrementPri = function(book) {
        if(book.priority >= 1) {
            bookService.decrementPriority(book)
                .then(function(result){
                    $scope.refresh()
                }, function(err){
                    console.log(err);
                });
        }
    };

}]);
