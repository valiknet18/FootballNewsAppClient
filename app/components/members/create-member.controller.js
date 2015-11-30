(function () {
  angular
      .module('football.controller.members')
      .controller('CreateMemberCtrl', CreateMemberCtrl);

  CreateMemberCtrl.$inject = [
    '$scope',
    '$mdDialog',
    'MembersUtils',
    'CommandsUtils'
  ];

  function CreateMemberCtrl($scope, $mdDialog, MembersUtils, CommandsUtils) {
    CommandsUtils
        .all()
        .then(function (response) {
          $scope.commands = response.data.data;
        }, function (error) {

        });

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      MembersUtils
          .create(answer)
          .then(function (response) {
            $mdDialog.hide(answer);

            alert('Футболіст успішно добавлений')
          }, function () {

          });
    };
  }
})();
