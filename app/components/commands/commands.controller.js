(function () {
    angular
        .module('football.controller.commands')
        .controller('CommandsCtrl', CommandsCtrl)
    ;

    CommandsCtrl.$inject = [
        '$scope',
        '$mdDialog'
    ];

    //Commands Controller block
    function CommandsCtrl ($scope, $mdDialog) {
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