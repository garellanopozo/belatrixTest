(function() {
  'use strict';

  angular
    .module('belatrixGit')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/director', {
        templateUrl: 'app/main/director.html',
        controller: 'DirectorController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
