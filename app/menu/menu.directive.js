(function () {
  'use strict';

  angular
      .module('football.menu')
      .directive('menu', menu);

  menu.$inject = [];

  function menu() {
    return {
      replace: true,
      controller: 'MenuController',
      controllerAs: 'menu',
      templateUrl: 'menu/menu.html'
    };
  }
})();