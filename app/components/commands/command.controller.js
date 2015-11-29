(function () {
  angular
      .module('football.controller.commands')
      .controller('CommandCtrl', CommandCtrl);

  CommandCtrl.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'CommandsUtils'
  ];

  //Command Ctrl block
  function CommandCtrl($scope, $state, $stateParams, CommandsUtils) {
    CommandsUtils
        .get($stateParams.id)
        .then(function (response) {
          $scope.command = response.data;
        }, function (error) {

        });

    $scope.go = function (state, id) {
      $state.go(state, {id: id});
    };
  }
})();
