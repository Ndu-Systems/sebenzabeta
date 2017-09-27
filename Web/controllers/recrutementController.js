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
    $scope.candidatesLS = [];
    // get skills 
    $http.post(GetApiUrl("get"), { table: "skills", condition: " 1 " })
.success(function (response, status) {
    $scope.skills = response.data;
});
    // get  candidates
    var data = {
        table: "candidate",
        condition: " 1 "
    };
    $http.post(GetApiUrl("get"), data)
    .success(function (response, status) {
        $scope.candidates = response.data;

        // get  work_history
        var data = {
            table: "work_history",
            condition: " 1 "
        };
        $http.post(GetApiUrl("get"), data)
        .success(function (response, status) {

            $scope.work_history = response.data;
           

            // GET JOINS
            angular.forEach($scope.candidates, function (value, key) {
                var historyData = [];
                var skillData = [];
                angular.forEach($scope.work_history, function (history, history_key) {

                    var historyobj = {
                        job_duties: history.job_duties,
                        company: history.company,
                        start_date: history.start_date,
                        end_date: history.end_date,
                        years: GetDatsDif(history.start_date, history.end_date),
                        end_date: history.end_date 
                    };
                    if (history.userId === value.id) {
                        historyData.push(historyobj);
                    }
                });
                // skills
                angular.forEach($scope.skills, function (skill, skill_key) {
                    var skillobj = {
                        skill: skill.skill,
                        experience: skill.experience
                    };
                    if (skill.userId === value.id) {
                        skillData.push(skillobj);
                    }
                });


                var candidate = {
                    name: value.name,
                    gender: value.gender,
                    race: value.race,
                    history: historyData,
                    dob: value.dob,
                    citizenship: value.citizenship,
                    job_sector: value.job_sector,
                    job_title: value.job_title,
                    current_company: value.current_company,
                    current_startdate: value.current_startdate,
                    skills: skillData,
                    city: value.city,
                    age: GetAge(new Date(value.dob))

                };
                $scope.candidatesLS.push(candidate);
            });
        });

    });

});
app.controller('recrutementController_toGo', function ($http, $scope, $window) {
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

function GetDatsDif(d1, d2) {
    var date1 = new Date(d1);
    var date2 = new Date(d2);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays/ 365;
}
function GetAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
