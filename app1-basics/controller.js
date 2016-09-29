app.controller('MainController',['$scope', function ($scope, service) {

(function getArray() {
  $scope.myArray = service.getArray();
})()

}])
