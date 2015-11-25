(function () {
    angular
        .module('football.controller.members')
        .controller('MembersCtrl', MembersCtrl)
    ;

    MembersCtrl.$inject = [
        '$scope',
        '$ngModel',
        '$mdDialog'
    ];

    function MembersCtrl($scope, $ngModel, $mdDialog) {
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

        }
    }
})();