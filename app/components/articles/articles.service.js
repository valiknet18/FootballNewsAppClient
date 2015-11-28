(function () {
    angular
        .module('football.service.articles')
        .factory('ArticlesUtils', ArticlesUtils)
    ;

    function ArticlesUtils($http, $q, server_host) {
        return {
            all: function () {
                var defer = $q.defer();

                console.log(1);

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
            get: function (id) {
                var defer = $q.defer();

                $http
                    .get(server_host + "/api/articles/" + id)
                    .then(function (success) {
                        defer.resolve(success)
                    }, function (error) {
                        defer.reject(error)
                    })
                ;

                return defer.promise
            },
            create: function (data) {
                var defer = $q.defer();

                $http
                    .post(server_host + "/api/articles", data)
                    .then(function (success) {
                        defer.resolve(success);
                    }, function (error) {
                        defer.reject();
                    })
                ;

                return defer.promise;
            }
        }
    }

    ArticlesUtils.$inject = [
        '$http',
        '$q',
        'server_host'
    ];
})();