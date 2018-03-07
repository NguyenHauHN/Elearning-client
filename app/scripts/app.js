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
  });

  $urlRouterProvider.otherwise('/home')
});
