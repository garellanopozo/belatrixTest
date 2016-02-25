(function() {
  'use strict';

  angular
    .module('belatrixGit')
    .factory('mainService', mainService);

  /** @ngInject */
  function mainService($http,$q) {
    var service = {
      getData: getData
    };
    return service;

    function getData() {
      var defer = $q.defer();
      $http.get('directors.json')
      .then(function(data){
        defer.resolve(data.data);
      })
      .catch(function(){
        defer.reject();
      });
      return defer.promise;
    }
  }
})();
