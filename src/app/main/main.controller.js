(function() {
  'use strict';

  angular
    .module('belatrixGit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, mainService) {
    var vm = this;
    vm.gridData = [];
    vm.totalServerItems = 0;

    activate();

    function activate() {
       mainService.getData()
       .then(function(data){
        vm.gridData = data;
      });
    }
  }
})();
