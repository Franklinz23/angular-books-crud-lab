angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+ $routeParams.bookId
  }).then(function onSuccess(json) {
    vm.book = json.data;
    console.log(json.data._id);
  }, function onError(response) {
    console.log('ERRR on ID response', response);
  });
}
