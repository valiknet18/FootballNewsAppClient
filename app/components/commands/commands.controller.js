(function () {
  angular
      .module('football.controller.commands')
      .controller('CommandsCtrl', CommandsCtrl);

  CommandsCtrl.$inject = [
    '$scope',
    '$mdDialog',
    '$state',
    'CommandsUtils',
    'ColorUtils'
  ];

  //Commands Controller block
  function CommandsCtrl($scope, $mdDialog, $state, CommandsUtils, ColorUtils) {
    $scope.backgroundColor = function () {
      for (var item in $scope.commands) {
        $scope.commands[item].color = ColorUtils.get();
      }
    };

    CommandsUtils
        .all()
        .then(function (response) {
          $scope.commands = response.data.data;
          $scope.backgroundColor();
        }, function (error) {

        });

    $scope.go = function (state, id) {
      $state.go(state, {id: id});
    };

    $scope.showModal = function (ev) {
      $mdDialog.show({
            controller: 'CreateCommandCtrl',
            templateUrl: 'components/commands/create-command.html',
            targetEvent: ev
          })
          .then(function (answer) {
            console.log(answer)
          }, function () {

          });
    }
  }
})();
