app.controller('trainingController', function ($http, $scope, $window) {
    // get  jobs
    var data = {
        table: "course",
        row : "sector"
    };
    $http.post(GetApiUrl("get_distict"), data)
    .success(function (response, status) {
        $scope.courses = response.data;
       
    });

    //training_qualifications
    var data2 = {
        table: "training_qualifications",
        condition: " 1 "
    };
    $http.post(GetApiUrl("get"), data2)
    .success(function (response, status) {
        $scope.qualifications = response.data;      
    });

});