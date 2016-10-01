angular.module('myApp').service('services', function ($http,$q) {

var myArray = [{name:'Jimmy'}, {name:'Sandra'}, {name:'Blake'}, {name:'Harry'}];

    this.getArray = function () {
      return myArray;
    }
///////////////////////////////////////////////
var users = [
  {
    firstName: 'Blake',
    LastName: 'Trainer'
  },
  {
    firstName: 'Tanner',
    LastName: 'Baldwin'
  },
  {
    firstName: 'sara',
    LastName: 'Hinder'
  },
  {
    firstName: 'Samule',
    LastName: 'Henderson'
  },
  {
    firstName: 'Jasmine',
    LastName: 'Johnson'
  }
];

  this.getUsers = function (){
    return users;
  }
////////////////////////////////////////////////

this.getStarWarsData = function (character) {
  var defer = $q.defer();
  $http({
    method: 'GET',
    url: 'http://swapi.co/api/people'
  }).then(function (response) {
    defer.resolve(response);
    console.log(response);
  })
  return defer.promise;
}

})
