(function () {
  angular
      .module('football.controller.articles')
      .controller('CreateArticleCtrl', CreateArticleCtrl);

  CreateArticleCtrl.$inject = [
    '$scope',
    '$mdDialog',
    'ArticlesUtils'
  ];

  //Current article block
  function CreateArticleCtrl($scope, $mdDialog, ArticlesUtils) {
    $scope.article = {
      tags: []
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      ArticlesUtils
          .create(answer)
          .then(function () {
            $mdDialog.hide(answer);

            alert('Стаття успішно створена!')
          }, function () {

          });
    };
  }
})();
