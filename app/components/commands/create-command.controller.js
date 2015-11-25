(function () {
    angular
        .module('football.controller.commands')
        .controller('CreateCommandCtrl', CreateCommandCtrl)
    ;

    CreateCommandCtrl.$inject = [
        '$scope',
        '$mdDialog'
    ];

    //Create Command Controller
    function CreateCommandCtrl ($scope, $mdDialog) {
        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }
})();