/**
 * Created by haunguyen on 14/03/2018.
 */
app.factory('CourseService', ['$resource', function ($resource, Domain) {
  return $resource("https://elearningspm.herokuapp.com" + '/courses',
    {},
    {
      'get': {method: 'GET', isArray: true}
    });
}]);
