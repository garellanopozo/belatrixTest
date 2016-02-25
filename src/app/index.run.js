(function() {
  'use strict';

  angular
    .module('belatrixGit')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
