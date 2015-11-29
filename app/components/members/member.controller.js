(function () {
  angular
      .module('football.controller.members')
      .controller('MemberCtrl', MemberCtrl);

  MemberCtrl.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'MembersUtils'
  ];

  function MemberCtrl($scope, $state, $stateParams, MembersUtils) {
    MembersUtils
        .get($stateParams.id)
        .then(function (response) {
          $scope.member = response.data;
        }, function (error) {

        });

    $scope.go = function (state, id) {
      $state.go(state, {id: id});
    };
  }
})();
