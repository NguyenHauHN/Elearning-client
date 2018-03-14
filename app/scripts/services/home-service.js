/**
 * Created by haunguyen on 13/03/2018.
 */
app.factory('HomeService', ['$resource', function ($resource, Domain) {
  return $resource("https://elearningspm.herokuapp.com" + '/my_courses',
    {},
    {
      'query': {method: 'GET', isArray: true},
      'get': {method: 'GET', url: "https://elearningspm.herokuapp.com/user_info"}
    }
  );
}]);
