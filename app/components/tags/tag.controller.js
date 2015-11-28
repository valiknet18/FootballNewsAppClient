(function () {
    angular
        .module('football.controller.tags')
        .controller('TagCtrl', TagCtrl)
    ;

    TagCtrl.$inject = [
        '$scope',
        '$state',
        '$stateParams',
        'TagsUtils'
    ];

    function TagCtrl ($scope, $state, $stateParams, TagsUtils) {
        TagsUtils
            .get($stateParams.id)
            .then(function (response) {
                $scope.tag = response.data;
            }, function (error) {

            })
        ;

        $scope.go = function (state, id) {
            $state.go(state, {id: id});
        };
    }
})();