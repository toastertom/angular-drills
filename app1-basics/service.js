angular.module('myApp').service('services', function () {

var myArray = [{name:'Jimmy'}, {name:'Sandra'}, {name:'Blake'}, {name:'Harry'}];

    this.getArray = function () {
      return myArray;
    }

})
