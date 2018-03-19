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
        $scope.infoCourse = data;
        $scope.numLearnedLesson = 0;
        _.map($scope.infoCourse.lessons, function (item) {
          if (item.islearned == 1) {
            $scope.numLearnedLesson += 1;
          }
        })

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

  $scope.enrollCoourse = function () {
    CourseService.enroll({
      id_user: idUser,
      id_course: $scope.idCourse
    }, function (data) {
      console.log(data);
      $scope.getInfoCourse();
    }, function (err) {
      console.log(err);
    });
  }

  $scope.quitCourse = function () {
    CourseService.quit({
      id_user: idUser,
      id_course: $scope.idCourse
    }, function (data) {
      console.log(data);
      alert('Thoát khóa học thành công!');
      $scope.getInfoCourse();
    }, function (err) {
      console.log(err);
    })
  }

  $scope.getPercentComplete = function (number, total) {
    return ((number / total) * 100).toFixed(2);
  }
});
