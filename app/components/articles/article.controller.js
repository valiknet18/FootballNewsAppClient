(function () {
    angular
        .module('football.controller.articles')
        .controller('ArticleCtrl', ArticleCtrl)
    ;

    ArticleCtrl.$inject = [
        '$scope',
        '$state',
        '$stateParams',
        'ArticlesUtils'
    ];

    //Current article block
    function ArticleCtrl ($scope, $state, $stateParams, ArticlesUtils) {
        ArticlesUtils
            .get($stateParams.id)
            .then(function (response) {
                $scope.article = response.data;
            }, function (error) {
                console.log(error);
            })
        ;

        $scope.go = function (state, id) {
            $state.go(state, {id: id});
        };
    }
})();