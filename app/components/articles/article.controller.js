(function () {
    angular
        .module('football.controller.articles')
        .controller('ArticleCtrl', ArticleCtrl)
    ;

    ArticleCtrl.$inject = [
        '$scope',
        '$stateParam',
        'ArticlesUtils'
    ];

    //Current article block
    function ArticleCtrl ($scope, $stateParam, ArticlesUtils) {

    }
})();