(function() {
  'use strict';

  angular
    .module('belatrixGit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $location, mainService) {
    var vm = this;
    vm.allData = [];
    vm.gridData = {};
    vm.mySelections = [];
    vm.totalServerItems = 0;
    activate();

    function activate() {
       mainService.getData()
       .then(function(data){
        vm.allData = data;
        vm.totalServerItems = data.length;
      });
    }

    vm.gridData = {
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      modifierKeysToMultiSelect: true,
      multiSelect: true,
      onRegisterApi: function(gridApi){
        vm.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged(null,function(){
          vm.mySelections = gridApi.selection.getSelectedRows();
          $location.path('/director/');
        });
      },
      data: 'vm.allData',
      columnDefs: [
                    { name:'name' , displayName: 'Name'},
                    { name:'sex' , displayName: 'Sex'},
                    { name:'nationality' , displayName: 'Nationality'},
                    { name:'city' , displayName: 'City'},
                    { name:'dob' , displayName: 'Dob', cellFilter: 'date: "dd/MM/yyyy"'},
                    { name:'age' , displayName: 'Age'},
                    { name:'blockbuster' , displayName: 'Blockbuster'}
                  ]
    };

  }
})();
