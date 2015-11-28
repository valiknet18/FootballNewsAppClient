(function () {
    angular
        .module('football.service.members')
        .factory('MembersUtils', MembersUtils)
    ;

    MembersUtils.$inject = [
        '$http',
        '$q',
        'Upload',
        'server_host'
    ];

    function MembersUtils($http, $q, Upload, server_host) {
        return {
            all: function () {
                var defer = $q.defer();

                $http
                    .get(server_host + "/api/members")
                    .then(function (response) {
                        defer.resolve(response)
                    }, function (error) {
                        defer.reject(error)
                    })
                ;

                return defer.promise;
            },
            get: function (id) {
                var defer = $q.defer();

                $http
                    .get(server_host + "/api/members/" + id)
                    .then(function (response) {
                        defer.resolve(response)
                    }, function (error) {
                        defer.reject(error)
                    })
                ;

                return defer.promise;
            },
            create: function (data) {
                var defer = $q.defer();

                Upload.upload({
                    url: server_host + "/api/members",
                    data: data
                }).then(function (resp) {
                    defer.resolve(resp);
                }, function (resp) {
                    console.log('Error status: ' + resp.status);

                    defer.reject(resp)
                }, function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    //console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                });

                return defer.promise;
            }
        }
    }
})();