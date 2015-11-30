(function () {
  angular
      .module('football.controller.commands')
      .controller('CommandCtrl', CommandCtrl);

  CommandCtrl.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'CommandsUtils',
    'ColorUtils'
  ];

  //Command Ctrl block
  function CommandCtrl($scope, $state, $stateParams, CommandsUtils, ColorUtils) {
    CommandsUtils
        .get($stateParams.id)
        .then(function (response) {
          $scope.command = response.data;
          $scope.command.color = ColorUtils.get();
          $scope.command.colorList = ColorUtils.get();
        }, function (error) {

        });

    $scope.go = function (state, id) {
      $state.go(state, {id: id});
    };
  }
})();
