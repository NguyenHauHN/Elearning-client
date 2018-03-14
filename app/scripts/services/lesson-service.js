/**
 * Created by haunguyen on 14/03/2018.
 */
app.factory('LeesonService', ['$resource', function ($resource) {
  return $resource("https://elearningspm.herokuapp.com/lesson",
    {},
    {
      'get': {method: 'GET'}
    }
  );
}]);
