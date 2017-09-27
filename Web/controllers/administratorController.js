app.controller('administratorController', function ($http, $scope, $window) {

});
app.controller('clientsController', function ($http, $scope, $window) {

    //get  clients
    var data3 = {
        table: "company",
        condition: "1"
    };
    $http.post(GetApiUrl("get"), data3)
    .success(function (response, status) {
        $scope.clients = response.data;
    });

    $scope.show = false;
    $scope.reg = true;
    //Add Client
   
    // selected client
    $scope.GetSelected = function (client) {
        $scope.name = client.name;
        $scope.contactperson = client.contactperson;
        $scope.email = client.email;
        $scope.tel = client.tel;
        $scope.province = client.province;
        $scope.city = client.city;
        $scope.surbub = client.surbub;
        $scope.address = client.address;
        $scope.status = client.status;
        $scope.id = client.id;
        $scope.show = true;
    };

    $scope.GetJobsForClient = function (client) {
        localStorage.setItem("companyName", client.name);
        localStorage.setItem("contactPerson", client.contactperson);
        localStorage.setItem("companyEmail", client.email);
        localStorage.setItem("companyTel", client.tel);
        localStorage.setItem("companyProvince", client.province);
        localStorage.setItem("companyCity", client.city);
        localStorage.setItem("companySurbub", client.surbub);
        localStorage.setItem("companyAddress", client.address);
        localStorage.setItem("companyStatus", client.status);
        localStorage.setItem("companyId", client.id);      
        $window.location.href = "#clientViewJobs";
    };

    // Update client
    $scope.Update = function () {

        $scope.message = undefined;
        var name = $scope.name;
        var contactperson = $scope.contactperson;
        var tel = $scope.tel;
        var email = $scope.email;
        var province = $scope.province;
        var city = $scope.city;
        var surbub = $scope.surbub;
        var address = $scope.address;


        if (email === undefined) {
            $scope.message = "Invalid email address";
        }

        else {
            var data = {
                name: name,
                contactperson: contactperson,
                tel: tel,
                email: email,
                province: province,
                city: city,
                surbub: surbub,
                address: address,
                id: $scope.id


            };

            $http.post(GetApiUrl("Company_Update"), data)
            .success(function (response, status) {
                //  alert(response);
                if (response === "1") {
                    // seuccess
                    localStorage.setItem("succes", "Client details updated successfully");
                    $scope.show = false;
                    localStorage.setItem("url", "#clients");
                    $window.location.href = "#succes";
                    //end success


                } else {
                    $scope.message = response;
                }
            });
        }
    };


});
app.controller('clientViewJobsController', function ($http, $scope, $window) {
    $scope.companyName = localStorage.getItem("companyName");
    $scope.companyAddress = localStorage.getItem("companyAddress");
    $scope.companyEmail = localStorage.getItem("companyEmail");
    $scope.contactPerson = localStorage.getItem("contactPerson");
    $scope.companyTel = localStorage.getItem("companyTel");

    $scope.show = false;
    var check = $scope.companyName;

    //Get Jobs for Client
    var data = {
        table: "job",
        condition: " 1"
    };
    $http.post(GetApiUrl("get"), data)
    .success(function (response, status) {
        angular.forEach(response.data, function (item) {
            if (item.componeyName === check) {
                $scope.jobs = response.data;
            }
        });       
    });

    $scope.assignCandidate = function (job) {
        localStorage.setItem("jobSector", job.catergorty);
        localStorage.setItem("jobDescription", job.description);
        localStorage.setItem("jobExperience", job.expirience);
        localStorage.setItem("jobComments", job.comment);
        localStorage.setItem("jobPositions", job.positions);
        localStorage.setItem("jobLocation", job.location);
        localStorage.setItem("jobCompanyName", job.componeyName);
        localStorage.setItem("jobStatus", job.status);
        localStorage.setItem("jobId", job.id);
        $window.location.href = "#jobAssignCandidate";
    }
});
app.controller('jobAssignCandidateController', function ($http, $scope, $window) {

    $scope.jobSector = localStorage.getItem("jobSector");
    $scope.jobDescription = localStorage.getItem("jobDescription");
    $scope.jobExperience = localStorage.getItem("jobExperience");
    $scope.jobComments = localStorage.getItem("jobComments");
    $scope.jobPositions = localStorage.getItem("jobPositions");
    $scope.jobLocation = localStorage.getItem("jobLocation");
    $scope.jobCompanyName = localStorage.getItem("jobCompanyName");
    $scope.jobStatus = localStorage.getItem("jobStatus");
    $scope.jobId = localStorage.getItem("jobId");

    var totalPosts = $scope.jobPositions;
    var check = $scope.jobSector;
    //Get Candidates for job
    //get  candidates
    var data2 = {
        table: "candidate",
        condition: "1"
    };
    $http.post(GetApiUrl("get"), data2)
    .success(function (response, status) {
        angular.forEach(response.data, function (item) {
            if (item.jobCatergory === check) {
                $scope.candidates = response.data;
            }
        });      
    });

    $scope.GetSelectedCandidate = function (candidate) {
        $scope.name = candidate.name;
        $scope.surname = candidate.surname;
        $scope.email = candidate.email;
        $scope.cell = candidate.cell;
        $scope.identity = candidate.identity;
        $scope.title = candidate.title;
        $scope.jobCatergory = candidate.jobCatergory;
        $scope.jobTitle = candidate.jobTitle;
        $scope.jobDescription = candidate.jobDescription;
        $scope.expirience = candidate.expirience;
        $scope.cv = candidate.cv;
        $scope.city = candidate.city;
        $scope.id = candidate.id;
        var status = "in progress";
    }

    $scope.Assign = function (candidate) {
        $scope.id = candidate.id;
        $scope.email = candidate.email;
        var status = "in progress";

        var id = $scope.id;
        var email = $scope.email;
        var companyName = $scope.jobCompanyName;
        var Location = $scope.jobLocation;
        var Status = status;
        var JobId = $scope.jobId;

        if (JobId === undefined) {
            $scope.error = "Job Post not Selected";
        }
        else {
            var data = {
                id: id,
                email: email,
                companyName: companyName,
                Location: Location,
                Status: Status,
                JobId: JobId
            };
            $http.post(GetApiUrl("Job_CandidateAssign"), data)
            .success(function (response, status) {
                if (response === "1") {
                    // seuccess
                    localStorage.setItem("succes", "Candidate details updated successfully");
                    localStorage.setItem("url", "#jobAssignCandidate");
                    $window.location.href = "#succes";
                    //end success
                } else {
                    $scope.message = response;
                }
            });
        }
    }

});
app.controller('candidateAssignToJobtController', function ($http, $scope, $window) {

});
app.controller('clientEditController', function ($http, $scope, $window) {

});

app.controller('candidatesListController', function ($http, $scope, $window) {

});
app.controller('candidateEditController', function ($http, $scope, $window) {

});