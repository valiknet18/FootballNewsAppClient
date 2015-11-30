(function () {
  angular
      .module('football.menu')
      .controller('MenuController', MenuController);

  MenuController.$inject = ['$mdBottomSheet'];

  function MenuController($mdBottomSheet) {
    var vm = this;
    vm.menu = [
      { name: 'Новини', url: 'index' },
      { name: 'Команди', url: 'commands' },
      { name: 'Гравці', url: 'members' }
    ];

    vm.openMobileMenu = function ($event) {
      $mdBottomSheet.show({
        controller: 'MenuMobileController',
        controllerAs: 'menuMobile',
        templateUrl: '/menu/mobile/menu-mobile.html',
        clickOutsideToClose: true,
        targetEvent: $event
      });
    }
  }
})();
