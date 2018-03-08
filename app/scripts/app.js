'use strict';

/**
 * @ngdoc overview
 * @name elearningApp
 * @description
 * # elearningApp
 *
 * Main module of the application.
 */
app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state({
    name: "login",
    url: "/login",
    templateUrl: "views/login.html",
    controller: "LoginController"
  })
  .state({
    name: "home",
    url: "/home",
    templateUrl: "views/home.html",
    controller: "HomeController"
  })
  .state({
    name: "courses",
    url: "/courses",
    templateUrl: "views/courses.html",
    controller: "CoursesController"
  })
  .state({
    name: "detailCourses",
    url: "/courses/{id}",
    templateUrl: "views/detail-course.html",
    controller: "DetailCourseController"
  })
  .state({
    name: "lesson",
    url: "/lesson/{id}",
    templateUrl: "views/lesson.html",
    controller: "LessonController"
  });

  $urlRouterProvider.otherwise('/home')
});
