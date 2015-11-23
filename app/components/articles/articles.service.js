(function () {
    angular
        .module('football.service.articles')
        .factory('ArticlesUtils', ArticlesUtils)
    ;

    function ArticlesUtils($http, $q, server_host) {
        return {
            all: function () {
                var defer = $q.defer();

                $http
                    .get(server_host + "/api/articles")
                    .then(function (success) {
                        defer.resolve(success)
                    }, function (error) {
                        defer.reject(error)
                    })
                ;

                return defer.promise;
            },
            get: function (slug) {
                var defer = $q.defer();

                $http
                    .get(server_host + "/api/articles/" + slug)
                    .then(function (success) {
                        defer.resolve(success)
                    }, function (error) {
                        defer.reject(error)
                    })
                ;

                return defer.promise
            }
        }
    }

    ArticlesUtils.$inject = [
        '$http',
        '$q',
        'server_host'
    ];
})();