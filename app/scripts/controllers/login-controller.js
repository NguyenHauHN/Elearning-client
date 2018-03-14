/**
 * Created by haunguyen on 07/03/2018.
 */
app.controller('LoginController', function ($scope, LoginService,$location) {
  $scope.login = function () {
    LoginService.post({},
      {
        email: $scope.email,
        password: $scope.password
      },
      function (data) {
        localStorage.setItem("email", data.email);
        localStorage.setItem("iduser", data.iduser);
        localStorage.setItem("name", data.name);
        localStorage.setItem("avatar", data.avatar);
        $location.path("home");
      },
      function (err) {
        if(err.status && err.status == 401){
          $scope.errorText = "Sai email hoặc mật khẩu. Mời bạn thử lại!";
        }
      }
    )
  }
});
