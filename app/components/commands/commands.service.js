(function () {
    angular
        .module('football.service.commands')
        .factory('CommandsUtils', CommandsUtils)
    ;

    function CommandsUtils ($http, $q, server_host) {
        return {
            all: function () {
                var defer = $q.defer();

                $http
                    .get(server_host + "/api/commands")
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
                    .get(server_host + "/api/commands/" + slug)
                    .then(function (success) {
                        defer.resolve(success)
                    }, function (error) {
                        defer.reject(error)
                    })
                ;

                return defer.promise;
            }
        }
    }

    CommandsUtils.$inject = [
        '$http',
        '$q',
        'server_host'
    ];
})();