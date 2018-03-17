/**
 * Created by haunguyen on 14/03/2018.
 */
app.controller('HeaderController', function ($scope, $window, $location, $state) {
  $scope.nameUser = localStorage.getItem("name");
  $scope.currState = $state.$current.name;

  $scope.logout = function () {
    $window.localStorage.clear();
    $location.path('/login');
  }

  $scope.activeMenu = function (uisref) {
    if(uisref == "home"){

    }
  }


});
