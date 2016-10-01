angular.module('myApp').service('services', function () {

var myArray = [{name:'Jimmy'}, {name:'Sandra'}, {name:'Blake'}, {name:'Harry'}];

    this.getArray = function () {
      return myArray;
    }

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
})
