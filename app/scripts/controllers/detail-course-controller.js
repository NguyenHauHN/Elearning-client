/**
 * Created by haunguyen on 08/03/2018.
 */
app.controller('DetailCourseController', function ($scope, CourseService, $state) {
  $scope.idCourse = $state.params.id_course;
  var idUser = localStorage.getItem('iduser');

  $scope.getInfoCourse = function () {
    if ($scope.idCourse) {
      CourseService.get({
        id_user: idUser,
        id_course: $scope.idCourse
      }, function (data) {
        console.log(data);
        $scope.infoCourse = data;
      }, function (err) {
        console.log(err);
      });
    }

  }

  $scope.getInfoCourse();

  $scope.limitText = function (text) {
    if (text && text.length > 120) {
      text = text.substring(0, 120) + "..."
    }
    return text;
  }
});