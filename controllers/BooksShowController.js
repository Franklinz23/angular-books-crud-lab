angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;

//DISPLAY SINGLE BOOK IN PAGE
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+ $routeParams.bookId
  }).then(function onSuccess(json) {
    vm.book = json.data;
    console.log(json.data._id);
  }, function onError(response) {
    console.log('ERRR on ID response', response);
  });

//UPDATE SINGLE BOOK
  vm.editBook = function (book) {
    console.log(book);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/'+ book._id,
      data: book
    }).then(function onSuccess(response) {
      $location.path('/');
      console.log(response);
    }, function onError(response) {
      console.log('ERRRRR on update', response);
    });

};

// //DELETE BOOK
//   vm.deleteBook = function (book) {
//     $http({
//       method: 'DELETE',
//       url: 'https://super-crud.herokuapp.com/books/' + book._id
//     })
  // }

}
