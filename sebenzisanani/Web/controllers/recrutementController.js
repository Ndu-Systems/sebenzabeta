app.controller('recrutementController', function ($http, $scope, $window) {
    // get  jobs
    var data = {
        table: "job",
        condition: " status = 'Open'"
    };
    $http.post(GetApiUrl("get"), data)
    .success(function (response, status) {
        if (response.data !== undefined) {
            $scope.openJobs = response.data;
            $scope.JobsCount = $scope.openJobs.length;
        } else {
            $scope.JobsCount = 0;
        }
    });
    // get  candidates
    var data = {
        table: "candidate",
        condition: " 1 "
    };
    $http.post(GetApiUrl("get"), data)
    .success(function (response, status) {
        if (response.data !== undefined) {
            $scope.candidates = response.data;
            $scope.candidatesCount = $scope.candidates.length;
        } else {
            $scope.candidatesCount = 0;
        }
    });

});
app.controller('candidatesController', function ($http, $scope, $window) {
  
});
app.controller('recrutementController', function ($http, $scope, $window) {
    // get  jobs
    var data = {
        table: "job",
        condition: " status = 'Open'"
    };
    $http.post(GetApiUrl("get"), data)
    .success(function (response, status) {
        if (response.data !== undefined) {
            $scope.openJobs = response.data;
            $scope.JobsCount = $scope.openJobs.length;
        } else {
            $scope.JobsCount = 0;
        }
    });
    // get  candidates
    var data = {
        table: "candidate",
        condition: " 1 "
    };
    $http.post(GetApiUrl("get"), data)
    .success(function (response, status) {
        if (response.data !== undefined) {
            $scope.candidates = response.data;
            $scope.candidatesCount = $scope.candidates.length;
        } else {
            $scope.candidatesCount = 0;
        }
    });

});
app.controller('scrapeController', function ($http, $scope, $window) {
  
  $scope.Scrape = function () {
      $scope.lines = $scope.text.split("\n");
      for (i = 0; i < $scope.lines.length; i++) {
          if ($scope.lines[i].toLowerCase().includes("names")) {
              $scope.name = $scope.lines[i].split(":")[1];
          }
          if ($scope.lines[i].toLowerCase().includes("email")) {
              $scope.email = $scope.lines[i].split(":")[1];
          }
          if ($scope.lines[i].toLowerCase().includes("surname")) {
              $scope.surname = $scope.lines[i].split(":")[1];
          }
          if ($scope.lines[i].toLowerCase().includes("cell")) {
              $scope.cell = $scope.lines[i].split(":")[1];
          }
          if ($scope.lines[i].toLowerCase().includes("id")) {
              $scope.id = $scope.lines[i].split(":")[1];
          }
          if ($scope.lines[i].toLowerCase().includes("citizenship")) {
              $scope.citizenship = $scope.lines[i].split(":")[1];
          }
          if ($scope.lines[i].toLowerCase().includes("gender")) {
              $scope.gender = $scope.lines[i].split(":")[1];
          }
          if ($scope.lines[i].toLowerCase().includes("address")) {
              $scope.address = $scope.lines[i].split(":")[1];
          }
      }
  }
});