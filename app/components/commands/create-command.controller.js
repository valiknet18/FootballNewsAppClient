(function () {
  angular
      .module('football.controller.commands')
      .controller('CreateCommandCtrl', CreateCommandCtrl);

  CreateCommandCtrl.$inject = [
    '$scope',
    '$mdDialog',
    'CommandsUtils'
  ];

  //Create Command Controller
  function CreateCommandCtrl($scope, $mdDialog, CommandsUtils) {
    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      CommandsUtils
          .create(answer)
          .then(function (response) {
            $mdDialog.hide(answer);

            alert('Команда успішно створена!')
          }, function (error) {

          });
    };
  }
})();
