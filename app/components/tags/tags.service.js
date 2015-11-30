(function () {
  angular
      .module('football.service.tags')
      .factory('TagsUtils', TagsUtils)
  ;

  TagsUtils.$inject = [
    '$http',
    '$q',
    'server_host'
  ];

  function TagsUtils($http, $q, server_host) {
    return {
      get: function (id) {
        var defer = $q.defer();

        $http
            .get(server_host + "/api/tags/" + id)
            .then(function (response) {
              defer.resolve(response)
            }, function (error) {
              defer.reject(error)
            });

        return defer.promise;
      }
    }
  }
})();
