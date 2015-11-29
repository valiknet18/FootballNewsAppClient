(function () {
  angular
      .module('football.controller.articles')
      .controller('ArticlesCtrl', ArticlesCtrl);

  ArticlesCtrl.$inject = [
    '$scope',
    '$mdDialog',
    '$state',
    'ArticlesUtils'
  ];

  //Block articles controller
  function ArticlesCtrl($scope, $mdDialog, $state, ArticlesUtils) {
    ArticlesUtils
        .all()
        .then(function (response) {
          $scope.articles = response.data.data;
        }, function (error) {
          console.log(error);
        });

    $scope.go = function (state, id) {
      $state.go(state, {id: id});
    };

    $scope.showModal = function (ev) {
      $mdDialog.show({
            controller: 'CreateArticleCtrl',
            templateUrl: 'components/articles/create-article.html',
            targetEvent: ev
          })
          .then(function (answer) {
            console.log(answer);

            tags = [];

            for (var i = 0; i < answer.tags.length; i++) {
              tag = {
                title: answer.tags[i]
              };

              tags.push(tag);
            }

            answer.tags = tags;

            $scope.articles.splice(0, 0, answer)
          }, function () {

          });
    }
  }
})();
