app.controller('succesController', function ($http, $scope, $window) {
    $scope.url = localStorage.getItem("url");
    $scope.succes = localStorage.getItem("succes");

    $scope.Ok = function () {
        $window.location.href = $scope.url;
    }
});


