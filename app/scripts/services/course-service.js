/**
 * Created by haunguyen on 14/03/2018.
 */
app.factory('CourseService', ['$resource', function ($resource, Domain) {
  return $resource("https://elearningspm.herokuapp.com/courses",
    {},
    {
      'query': {method: 'GET'},
      'get': {method: 'GET', url: "https://elearningspm.herokuapp.com/course"},
      'enroll': {method: 'PUT', url: "https://elearningspm.herokuapp.com/enroll"},
      'quit': {method: 'PUT', url: "https://elearningspm.herokuapp.com/quit_course"},
      'search': {method: 'GET', url: "https://elearningspm.herokuapp.com/search_course"}
    });
}]);
