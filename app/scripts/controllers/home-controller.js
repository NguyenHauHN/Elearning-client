/**
 * Created by haunguyen on 08/03/2018.
 */
app.controller('HomeController', function ($scope, HomeService) {
  var idCurrentUser = localStorage.getItem("iduser");

  $scope.getOwnCourse = function () {
    if (idCurrentUser) {
      HomeService.get({id_user: idCurrentUser}, function (data) {
        console.log(data);
      }, function (err) {

      });
    }
  }

  $scope.getOwnCourse();
});
