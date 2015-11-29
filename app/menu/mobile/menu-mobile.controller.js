(function () {
  angular
      .module('football.menu')
      .controller('MenuMobileController', MenuMobileController);

  MenuMobileController.$inject = ['$mdBottomSheet'];

  function MenuMobileController($mdBottomSheet) {
    var vm = this;

    vm.menuMobile = function ($index) {
      $mdBottomSheet.hide($index);
    };
  }
})();
