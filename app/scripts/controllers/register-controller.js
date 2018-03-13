/**
 * Created by haunguyen on 13/03/2018.
 */
app.controller('RegisterController', function ($scope, RegisterService) {
  $scope.register = function () {
    if ($scope.password !== $scope.retypePassword) {
      $scope.errorText = "Mật khẩu không khớp. Vui lòng nhập lại!";
      $scope.successText = null;
    }
    else {
      RegisterService.post({},
        {
          user_name: $scope.username,
          email: $scope.email,
          password: $scope.password
        }, function (data) {
          $scope.password = "";
          $scope.retypePassword = "";
          $scope.successText = "Đăng ký tài khoản thành công!";
          $scope.errorText = null;
        }, function (err) {
          if (err.status && err.status == 400) {
            $scope.errorText = "Tài khoản đã tồn tại!";
            $scope.successText = null;
          }
        });
    }
  }
});
