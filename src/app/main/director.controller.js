(function() {
  'use strict';

  angular
    .module('belatrixGit')
    .controller('DirectorController', DirectorController);

  /** @ngInject */
  function DirectorController($log, $location, mainService) {
    var vm = this;

    activate();

    function activate() {
        mainService.getDirector()
       .then(function(data){
          vm.allData = data;
        });
    }
  }
})();
