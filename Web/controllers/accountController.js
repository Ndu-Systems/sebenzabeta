app.controller('loginController', function ($http, $scope, $window) {
    var me = this;
    //if (localStorage.getItem("isCompanyLoggedIn") === "true") {
    //    $window.location.href = "#company-dashboard";
    //}
    //if (localStorage.getItem("isAdminLoggedIn") === "true") {
    //    $window.location.href = "#admin-dashboard";
    //}
    //if (localStorage.getItem("isCandidateLoggedIn") === "true") {
    //    $window.location.href = "#candidate-dashboard";
    //}
    $scope.Login = function () {
        $scope.message = undefined;
        var email = $scope.email;
        var password = $scope.password;

        if (email !== undefined) {
            var data = {
                email: email,
                password: password
            };

            $http.post(GetApiUrl("login"), data)
            .success(function (response, status) {
                if (response !== undefined && response.length !== 0) {
                    var user = response.user[0];
                    var role = user.role;
                    var email = user.email;
                    if (role === "admin") {
                        localStorage.setItem("isAdminLoggedIn", true);
                        localStorage.setItem("adminEmail", email);
                        $window.location.href = "#/admin-dashboard";
                    }
                    if (role === "company") {
                        localStorage.setItem("isCompanyLoggedIn", true);
                        localStorage.setItem("adminEmail", email);
                        $window.location.href = "#/company-dashboard";
                    }
                    if (role === "candidate") {
                        localStorage.setItem("isCandidateLoggedIn", true);
                        localStorage.setItem("adminEmail", email);
                        $window.location.href = "#/candidate-dashboard";
                    }
                }
                else {
                    $scope.message = "Your login credentials were not correct, please try again.";
                }
            });
        } else {
            $scope.message = "Please enter a valid email address.";
        }

    };
});


app.controller('addCandidateController', function ($http, $scope, $window) {
    var me = this;
    //if (localStorage.getItem("isCompanyLoggedIn") === "true") {
    //    $window.location.href = "#company-dashboard";
    //}
    //if (localStorage.getItem("isAdminLoggedIn") === "true") {
    //    $window.location.href = "#admin-dashboard";
    //}
    //if (localStorage.getItem("isCandidateLoggedIn") === "true") {
    //    $window.location.href = "#candidate-dashboard";
    //}
    $scope.Login = function () {
        $scope.message = undefined;
        var email = $scope.email;
        var password = $scope.password;

        if (email !== undefined) {
            var data = {
                email: email,
                password: password
            };

            $http.post(GetApiUrl("login"), data)
            .success(function (response, status) {
                if (response !== undefined && response.length !== 0) {
                    var user = response.user[0];
                    var role = user.role;
                    var email = user.email;
                    if (role === "admin") {
                        localStorage.setItem("isAdminLoggedIn", true);
                        localStorage.setItem("adminEmail", email);
                        $window.location.href = "#/admin-dashboard";
                    }
                    if (role === "company") {
                        localStorage.setItem("isCompanyLoggedIn", true);
                        localStorage.setItem("adminEmail", email);
                        $window.location.href = "#/company-dashboard";
                    }
                    if (role === "candidate") {
                        localStorage.setItem("isCandidateLoggedIn", true);
                        localStorage.setItem("adminEmail", email);
                        $window.location.href = "#/candidate-dashboard";
                    }
                }
                else {
                    $scope.message = "Your login credentials were not correct, please try again.";
                }
            });
        } else {
            $scope.message = "Please enter a valid email address.";
        }

    };
});