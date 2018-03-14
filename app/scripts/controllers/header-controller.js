/**
 * Created by haunguyen on 14/03/2018.
 */
app.controller('HeaderController', function ($scope, $window, $location) {
  $scope.nameUser = localStorage.getItem("name");

  $scope.logout = function () {
    $window.localStorage.clear();
    $location.path('/login');
  }
});
