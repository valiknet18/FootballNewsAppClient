(function () {
  angular
      .module('football.service.commands')
      .factory('CommandsUtils', CommandsUtils);

  CommandsUtils.$inject = [
    '$http',
    '$q',
    'Upload',
    'server_host'
  ];

  function CommandsUtils($http, $q, Upload, server_host) {
    return {
      all: function () {
        var defer = $q.defer();

        $http
            .get(server_host + "/api/commands")
            .then(function (success) {
              defer.resolve(success)
            }, function (error) {
              defer.reject(error)
            });

        return defer.promise;
      },
      get: function (id) {
        var defer = $q.defer();

        $http
            .get(server_host + "/api/commands/" + id)
            .then(function (success) {
              defer.resolve(success)
            }, function (error) {
              defer.reject(error)
            });

        return defer.promise;
      },
      create: function (data) {
        var defer = $q.defer();

        Upload.upload({
          url: server_host + "/api/commands",
          data: data
        }).then(function (resp) {
          defer.resolve(resp);
        }, function (resp) {
          console.log('Error status: ' + resp.status);

          defer.reject(resp)
        }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        });

        return defer.promise;
      }
    }
  }
})();
