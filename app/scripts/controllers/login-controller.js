/**
 * Created by haunguyen on 07/03/2018.
 */
app.controller('LoginController', function ($scope, LoginService, $location) {
  $scope.loadingLogin = false;
  $scope.login = function () {
    $scope.loadingLogin = true;
    LoginService.post({},
      {
        email: $scope.email,
        password: $scope.password
      },
      function (data) {
        $scope.loadingLogin = false;
        localStorage.setItem("email", data.email);
        localStorage.setItem("iduser", data.iduser);
        localStorage.setItem("name", data.name);
        localStorage.setItem("avatar", data.avatar);
        $location.path("home");
      },
      function (err) {
        $scope.loadingLogin = false;
        if (err.status && err.status == 401) {
          $scope.errorText = "Sai email hoặc mật khẩu. Mời bạn thử lại!";
        }
      }
    )
  }
});
