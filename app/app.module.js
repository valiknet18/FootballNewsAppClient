(function () {
    angular
        .module("football", [
            'ngMaterial',
            'ngMdIcons',
            'ui.router',
            'football.controllers'
        ])
        .constant("server_host", "http://localhost:8000")
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("index", {
                    url: "/",
                    controller: "ArticlesCtrl",
                    templateUrl: "components/articles/articles.html"
                })
                .state("article", {
                    url: "/articles/:slug",
                    controller: "ArticleCtrl",
                    templateUrl: "components/articles/article.html"
                })
                .state("commands", {
                    url: "/commands",
                    controller: "CommandsCtrl",
                    templateUrl: "components/commands/commands.html"
                })
                .state("command", {
                    url: "/commands/:slug",
                    controller: "CommandCtrl",
                    templateUrl: "components/commands/command.html"
                })
                .state("members", {
                    url: "/members",
                    controller: "MembersCtrl",
                    templateUrl: "components/members/members.html"
                })
                .state("member", {
                    url: "/members/:slug",
                    controller: "MemberCtrl",
                    templateUrl: "components/members/member.html"
                })
            ;
        })
    ;
})();