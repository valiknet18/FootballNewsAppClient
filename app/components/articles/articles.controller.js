(function () {
    angular
        .module('football.controller.articles')
        .controller('ArticlesCtrl', ArticlesCtrl)
    ;

    ArticlesCtrl.$inject = [
        '$scope',
        '$mdDialog',
        'ArticlesUtils'
    ];

    //Block articles controller
    function ArticlesCtrl ($scope, $mdDialog, ArticlesUtils) {
        $scope.showModal = function (ev) {
            $mdDialog.show({
                    controller: 'CreateArticleCtrl',
                    templateUrl: 'components/articles/create-article.html',
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