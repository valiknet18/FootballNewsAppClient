(function () {
    angular
        .module('football.controller.articles')
        .controller('CreateArticleCtrl', CreateArticleCtrl)
    ;

    CreateArticleCtrl.$inject = [
        '$scope',
        '$mdDialog',
        'ArticlesUtils'
    ];

    //Current article block
    function CreateArticleCtrl ($scope, $mdDialog, ArticlesUtils) {
        $scope.article = {
            tags: [

            ]
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }
})();