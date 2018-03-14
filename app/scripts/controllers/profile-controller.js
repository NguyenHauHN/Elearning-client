/**
 * Created by haunguyen on 11/03/2018.
 */
app.controller('ProfileController', function ($scope, HomeService) {
  var idCurrentUser = localStorage.getItem("iduser");
  $scope.getUserInfo = function () {
    HomeService.get({id_user: idCurrentUser}, function (data) {
      console.log(data);
      $scope.userInfo = data;
    }, function (err) {
      console.log(err);
    })
  }

  $scope.getUserInfo();
});
