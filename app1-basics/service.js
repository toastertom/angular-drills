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

    var defferedMaster = $q.defer();


    $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/?search=' + character
    }).then(function (response) {
      var characters = response.data.results;
      var promises = [];

      characters.forEach(function(character) {
        var deferred = $q.defer();
        var modCharObj = {
          name: character.name,
          gender: character.gender
        }
        getHomeworld.call(character).then(function(response) {
          modCharObj.homeworld = response;

          deferred.resolve(modCharObj);
        });
        promises.push(deferred.promise)
      });
      var responses =  $q.all(promises);
      defferedMaster.resolve(responses)
    });

    return defferedMaster.promise;
  }

  function getHomeworld() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: this.homeworld
    }).then(function(response) {
      deferred.resolve(response.data.name)
    })

    return deferred.promise;
  }

  // this.getStarWarsData = function (character) {
  //   var defer = $q.defer();
  //   $http({
  //     method: 'GET',
  //     url: 'http://swapi.co/api/people/?search=' + character
  //   }).then(function (response) {
  //     var filterData = response.data.results;
  //     var responseData= [];
  //     filterData.forEach(function(obj) {
  //       $http({
  //         method: 'GET',
  //         url: obj.homeworld
  //       }).then(function (response) {
  //         //dig into homworld response, set a variable
  //         //the key you want
  //         //and then down below set homeworld to that var
  //         console.log(12345, response.data.name)
  //         var homeworldName =  response.data.name
  //
  //
  //         var charObj = {
  //           name: obj.name,
  //           gender: obj.gender,
  //           homeworld: homeworldName,
  //           url: obj.url,
  //           species: obj.species[0]
  //         }
  //         console.log(222222222, charObj)
  //         responseData.push(charObj);
  //       });
  //     });
  //     defer.resolve(responseData);
  //     console.log(4444444, responseData);
  //     return defer.promise;
  //   });
  // }

})
