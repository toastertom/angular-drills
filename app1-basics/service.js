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

    var filterData = response.data.results;
    var responseData= [];
    for (var i = 0; i < filterData.length; i++){
      var obj = {
        name: filterData[i].name,
        gender: filterData[i].gender,
        homeworld: filterData[i].homeworld,
        url: filterData[i].url,
        species: filterData[i].species[0]
      }
      responseData.push(obj);
  }
    defer.resolve(response);
    console.log(responseData);
  })
  return defer.promise;
}

})
