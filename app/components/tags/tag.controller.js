(function () {
  angular
      .module('football.controller.tags')
      .controller('TagCtrl', TagCtrl)
  ;

  TagCtrl.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'TagsUtils',
      'ColorUtils'
  ];

  function TagCtrl($scope, $state, $stateParams, TagsUtils,ColorUtils) {
    TagsUtils
        .get($stateParams.id)
        .then(function (response) {
          $scope.tag = response.data;
          $scope.tag.color = ColorUtils.get();
        }, function (error) {

        });

    $scope.go = function (state, id) {
      $state.go(state, {id: id});
    };
  }
})();
