/**
 * Created by haunguyen on 08/03/2018.
 */
app.controller('HomeController', function ($scope, HomeService) {
  var idCurrentUser = localStorage.getItem("iduser");


  $scope.getOwnCourse = function () {
    if (idCurrentUser) {
      HomeService.query({id_user: idCurrentUser}, function (data) {
        $scope.ownCourses = data;
      }, function (err) {

      });
    }
  };

  $scope.getUserInfo = function () {
    HomeService.get({id_user: idCurrentUser}, function (data) {
      console.log(data);
      $scope.userInfo = data;
    }, function (err) {
      console.log(err);
    })
  }

  $scope.getPercentComplete = function (number, total) {
    return ((number / total) * 100).toFixed(2);
  }

  $scope.getOwnCourse();
  $scope.getUserInfo();
});
