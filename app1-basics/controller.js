angular.module('myApp').controller('MainController', function ($scope, services) {

(function getArray() {
  $scope.myArray = services.getArray();
})();
///////////////////////////////////////////////
(function getUsers() {
  $scope.users = services.getUsers();
})();

$scope.search = '';
///////////////////////////////////////////////

$scope.getPerson = function (character) {
  services.getStarWarsData(character).then(function (response) {
    $scope.getPerson = response;
  })
}
});
