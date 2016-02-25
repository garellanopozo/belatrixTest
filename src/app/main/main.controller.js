(function() {
  'use strict';

  angular
    .module('belatrixGit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $location, mainService) {
    var vm = this;
    vm.allData = [];
    vm.gridData = {
      data: 'vm.allData',
      enableRowSelection: true,
      enableSelectAll: true,
      columnDefs: [
                    { name:'name' , displayName: 'Name'},
                    { name:'sex' , displayName: 'Sex'},
                    { name:'nationality' , displayName: 'Nationality'}
                  ],
        afterSelectionChange: function (rowItem) {
          if (rowItem.selected)  {
            $location.path('/director/');
          }
        }
    };
    vm.totalServerItems = 0;

    activate();

    function activate() {
       mainService.getData()
       .then(function(data){
        vm.allData = data;
        vm.totalServerItems = data.length;
        vm.gridData.data = vm.allData;
      });
    }
  }
})();
