/**
 * Created by haunguyen on 09/03/2018.
 */
app.controller('LessonController', function ($scope, LeesonService, $state, CourseService) {
  var idUser = localStorage.getItem('iduser');
  $scope.idCourse = $state.params.id_course;
  var idLesson = $state.params.id_lesson;
  $scope.getInfoLesson = function () {
    if (idLesson) {
      LeesonService.get({id_lesson: idLesson}, function (data) {
        $scope.lesson = data;
      }, function (err) {
        console.log(err);
      })
    }
  }

  $scope.getInfoLesson();

  $scope.getInfoCourse = function () {
    if ($scope.idCourse) {
      CourseService.get({
        id_user: idUser,
        id_course: $scope.idCourse
      }, function (data) {
        $scope.infoCourse = data;
        if ($scope.infoCourse.lessons && $scope.infoCourse.lessons.length > 1) {
          var listIdLesson = _.pluck($scope.infoCourse.lessons, 'idlesson');
          _.map(listIdLesson, function (item, index) {
            if (item == idLesson) {
              $scope.idNextLesson = listIdLesson[index + 1];
              if (index >= 1) {
                $scope.idPrevLesson = listIdLesson[index - 1];
              }

              $scope.currentIndex = index + 1;
            }
          })
        }
      }, function (err) {
        console.log(err);
      });
    }

  }

  $scope.getInfoCourse();
});
