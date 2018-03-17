/**
 * Created by haunguyen on 08/03/2018.
 */
app.controller('CoursesController', function ($scope, CourseService) {
  $scope.currentPage = 1;
  $scope.getAllCourse = function () {
    CourseService.query({
      page: $scope.currentPage
    }, function (data) {
      console.log(data);
      $scope.courses = data.data;
    }, function (err) {
      console.log(err);
    });
  };

  $scope.getAllCourse();

  $scope.loadMore = function () {
    $scope.currentPage += 1;
    $scope.getAllCourse();
  }
});
