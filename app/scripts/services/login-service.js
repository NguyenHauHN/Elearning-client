/**
 * Created by haunguyen on 13/03/2018.
 */
app.factory('LoginService', ['$resource', function ($resource, Domain) {
  console.log(123);
  return $resource("https://elearningspm.herokuapp.com" + '/login',
    {},
    {
      'post': {method: 'POST'}
    });
}]);
