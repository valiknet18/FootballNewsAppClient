(function () {
    angular
        .module('football.controller.commands')
        .controller('CommandsCtrl', CommandsCtrl)
    ;

    CommandsCtrl.$inject = [
        '$scope',
        '$mdDialog',
        '$state',
        'CommandsUtils'
    ];

    //Commands Controller block
    function CommandsCtrl ($scope, $mdDialog, $state, CommandsUtils) {
        CommandsUtils
            .all()
            .then(function (response) {
                $scope.commands = response.data.data;
            }, function (error) {

            })
        ;

        $scope.go = function (state, id) {
            $state.go(state, {id: id});
        };

        $scope.showModal = function (ev) {
            $mdDialog.show({
                controller: 'CreateCommandCtrl',
                templateUrl: 'components/commands/create-command.html',
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