(function () {
  angular
      .module('football.controller.members')
      .controller('MemberCtrl', MemberCtrl);

  MemberCtrl.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'MembersUtils',
      'ColorUtils'
  ];

  function MemberCtrl($scope, $state, $stateParams, MembersUtils, ColorUtils) {
    MembersUtils
        .get($stateParams.id)
        .then(function (response) {
          $scope.member = response.data;
          $scope.member.color = ColorUtils.get();
        }, function (error) {

        });

    $scope.go = function (state, id) {
      $state.go(state, {id: id});
    };
  }
})();
