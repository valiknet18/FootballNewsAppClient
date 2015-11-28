(function () {
    angular
        .module('football.controller.members')
        .controller('MembersCtrl', MembersCtrl)
    ;

    MembersCtrl.$inject = [
        '$scope',
        '$state',
        '$mdDialog',
        'MembersUtils'
    ];

    function MembersCtrl($scope, $state, $mdDialog, MembersUtils) {
        MembersUtils
            .all()
            .then(function (response) {
                $scope.members = response.data.data
            }, function (error) {

            })
        ;

        $scope.showModal = function (ev) {
            $mdDialog.show({
                    controller: 'CreateMemberCtrl',
                    templateUrl: 'components/members/create-member.html',
                    targetEvent: ev
                })
                .then(function (answer) {
                    console.log(answer)
                }, function () {

                })
            ;

        };

        $scope.go = function (state, id) {
            $state.go(state, {id: id});
        };
    }
})();