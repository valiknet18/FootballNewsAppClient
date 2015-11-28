(function () {
    angular.module('football.service.articles', []);
    angular.module('football.service.commands', []);
    angular.module('football.service.members', []);
    angular.module('football.service.tags', []);

    angular.module('football.controller.articles', [
        'football.service.articles'
    ]);
    angular.module('football.controller.commands', [
        'football.service.commands'
    ]);
    angular.module('football.controller.members', [
        'football.service.members'
    ]);
    angular.module('football.controller.tags', [
        'football.service.tags'
    ]);

    angular
        .module('football.controllers', [
            'football.controller.articles',
            'football.controller.commands',
            'football.controller.members',
            'football.controller.tags'
        ])
    ;
})();