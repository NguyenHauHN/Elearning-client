/**
 * Created by haunguyen on 09/03/2018.
 */
app.controller('LessonController', function ($scope, LeesonService, $state) {
  $scope.getInfoLesson = function () {
    if ($state.params.id_lesson) {
      LeesonService.get({id_lesson: $state.params.id_lesson}, function (data) {
        $scope.lesson = data;
      }, function (err) {
        console.log(err);
      })
    }
  }

  $scope.getInfoLesson();
});
