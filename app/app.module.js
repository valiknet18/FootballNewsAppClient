(function () {
  angular
      .module("football", [
        'ngMaterial',
        'ngMdIcons',
        'ui.router',
        'football.controllers',
        'ngFileUpload'
      ])
      .constant("server_host", "http://football.local")
      .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("index", {
              url: "/",
              controller: "ArticlesCtrl",
              templateUrl: "components/articles/articles.html"
            })
            .state("article", {
              url: "/articles/:id",
              controller: "ArticleCtrl",
              templateUrl: "components/articles/article.html"
            })
            .state("commands", {
              url: "/commands",
              controller: "CommandsCtrl",
              templateUrl: "components/commands/commands.html"
            })
            .state("command", {
              url: "/commands/:id",
              controller: "CommandCtrl",
              templateUrl: "components/commands/command.html"
            })
            .state("members", {
              url: "/members",
              controller: "MembersCtrl",
              templateUrl: "components/members/members.html"
            })
            .state("member", {
              url: "/members/:id",
              controller: "MemberCtrl",
              templateUrl: "components/members/member.html"
            })
            .state("tag", {
              url: "/tags/:id",
              controller: "TagCtrl",
              templateUrl: "components/tags/tag.html"
            })
        ;
      })
  ;
})();
