angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function onSuccess(response) {
    vm.books = response.data.books;
    console.log('AYEEEE a response', response.data.books);
  }, function onError(response) {
    console.log('ERRRRR', response);
  });

}
