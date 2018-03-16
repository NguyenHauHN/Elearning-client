/**
 * Created by haunguyen on 16/03/2018.
 */
app.factory('QuestionsService', ['$resource', function ($resource) {
  return $resource("https://elearningspm.herokuapp.com/question",
    {},
    {
      'query': {method: 'GET'},
      'post': {method: 'POST', url: "https://elearningspm.herokuapp.com/save_pathway"}
    }
  );
}]);
