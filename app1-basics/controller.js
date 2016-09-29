angular.module('myApp').controller('MainController', function ($scope, services) {

(function getArray() {
  $scope.myArray = services.getArray();
})()

});
