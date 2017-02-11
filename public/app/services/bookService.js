angular.module('books').service('bookService', ['$http', function($http){

    var CategoryEnum = {
            FICTION: 1,
            NONFICTION: 2
        };


    this.getBooks = function(){
        return $http.get('/books').success(function(data){
            return data;
        }).error(function(err){
            console.log(err);
        });
    }

    this.createBook = function(name, priority, category){
        return $http.post('/books', {name: name, priority: priority, category: category})
            .success(function(data){
                console.log("Book Created!");
            }).error(function(err){
                console.log("Book was not created: " + err);
            });
    }

    this.deleteAllBooks = function(){
        return $http.delete('/books').success(function(data){
            console.log("All Books Deleted");
        }).error(function(err){
            console.log("All Books were not deleted");
        })
    }

    this.getBook = function(id){
        return $http.get('/books/' +id).success(function(data){
            return data;
        }).error(function(err){
            console.log("Get Book By id err "+ err)
        })
    }

    this.deleteBookWithId = function(id){
        return $http.delete('/books/' +id).success(function(data){
            console.log("Deleted book with id");
        }).error(function(err){
            console.log("Unable to delete book: "+err);
        });
    }

    this.getBooksByCategory = function(category) {
        return $http.get('/books/category/' +category).success(function(data){
            return data
        }).error(function(err){
            console.log("Could not get book for category: "+ category)
        });
    }

    this.incrementPriority = function(book) {
        var currentPri = book.priority;
        var newPriority = currentPri + 1;
        return $http.put('/books/' +book._id, {name: book.name, priority: newPriority, category: book.category})
            .success(function(res){
                console.log(res);
            }).error(function(err){
                console.log(err);
            });
    }

    this.decrementPriority = function(book) {
        var currentPri = book.priority;
        var newPriority = currentPri - 1;
        return $http.put('/books/' +book._id, {name: book.name, priority: newPriority, category: book.category})
            .success(function(res){
                console.log(res);
            }).error(function(err){
                console.log(err);
            });
    }
}]);