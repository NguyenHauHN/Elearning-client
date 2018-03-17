/**
 * Created by haunguyen on 08/03/2018.
 */
app.controller('CoursesController', function ($scope, CourseService) {
  $scope.currentPage = 1;
  $scope.getAllCourse = function () {
    $scope.currentPage = 1;
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
    if ($scope.keyword) {
      $scope.searchCourse
    }
    else {
      $scope.getAllCourse();
    }

  }

  $scope.searchCourse = function () {
    $scope.currentPage = 1;
    CourseService.search({
      name: $scope.keyword,
      page: $scope.currentPage
    }, function (data) {
      $scope.courses = data.data;
    }, function (err) {
      console.log(err);
    })
  }
});
