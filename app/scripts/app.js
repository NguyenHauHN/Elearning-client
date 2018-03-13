'use strict';

/**
 * @ngdoc overview
 * @name elearningApp
 * @description
 * # elearningApp
 *
 * Main module of the application.
 */
app.config(function ($stateProvider, $urlRouterProvider, $resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
  $stateProvider
    .state({
      name: "login",
      url: "/login",
      templateUrl: "views/login.html",
      controller: "LoginController"
    })
    .state({
      name: "register",
      url: "/register",
      templateUrl: "views/register.html",
      controller: "RegisterController"
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
    })
    .state({
      name: "profile",
      url: "/profile",
      templateUrl: "views/profile.html",
      controller: "ProfileController"
    })
    .state({
      name: "changePassword",
      url: "/change-password",
      templateUrl: "views/change-password.html",
      controller: "ProfileController"
    })
    .state({
      name: "learnLesson",
      url: "/lesson/{idLesson}/learn",
      templateUrl: "views/learn-lesson.html",
      controller: "LearnLessonController"
    });

  $urlRouterProvider.otherwise('/home')
})
  .run(['$http', '$rootScope','$location', '$state' , function ($http, $rootScope, $location, $state) {
    $rootScope.$on('$locationChangeSuccess', function (event) {
      if (!localStorage.getItem("iduser")) {
        $state.transitionTo('login');
      }
    });

    $http.defaults.headers.common['Content-Type'] = 'application/json';
    $http.defaults.headers.common['Accept'] = 'application/json';
  }]);
