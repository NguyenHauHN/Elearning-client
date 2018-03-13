/**
 * Created by haunguyen on 13/03/2018.
 */
app.factory('RegisterService', ['$resource', function ($resource, Domain) {
  console.log(123);
  var headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
  return $resource("https://elearningspm.herokuapp.com" + '/register',
    {},
    {
      'post': {method: 'POST',headers: headers}
    } );
}]);
