/**
 * Created by haunguyen on 08/03/2018.
 */
app.controller('CoursesController', function ($scope, CourseService) {
  $scope.getAllCourse = function () {
    CourseService.query({}, function (data) {
      $scope.courses = data;
    }, function (err) {
      console.log(err);
    });
  }

  $scope.getAllCourse();
});
