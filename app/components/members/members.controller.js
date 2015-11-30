(function () {
  angular
      .module('football.controller.members')
      .controller('MembersCtrl', MembersCtrl);

  MembersCtrl.$inject = [
    '$scope',
    '$state',
    '$mdDialog',
    'MembersUtils',
    'ColorUtils'
  ];

  function MembersCtrl($scope, $state, $mdDialog, MembersUtils, ColorUtils) {
    $scope.backgroundColor = function () {
      for (var item in $scope.members) {
        $scope.members[item].color = ColorUtils.get();
      }
    };

    MembersUtils
        .all()
        .then(function (response) {
          $scope.members = response.data.data;
          $scope.backgroundColor();
        }, function (error) {

        });

    $scope.showModal = function (ev) {
      $mdDialog.show({
            controller: 'CreateMemberCtrl',
            templateUrl: 'components/members/create-member.html',
            targetEvent: ev
          })
          .then(function (answer) {
            console.log(answer)
          }, function () {

          });

    };

    $scope.go = function (state, id) {
      $state.go(state, {id: id});
    };
  }
})();
