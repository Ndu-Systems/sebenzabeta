app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
         .when('/', {
             templateUrl: 'pages/home/index.html',
             controller: 'homeController'
         })
          .when('/Home', {
              templateUrl: 'pages/home/index.html',
              controller: 'homeController'
          })
         .when('/about', {
             templateUrl: 'pages/home/about.html',
             controller: 'homeController'
         })
         .when('/contact', {
             templateUrl: 'pages/home/contact.html',
             controller: 'homeController'
         })
        .when('/login', {
             templateUrl: 'pages/account/login.html',
             controller: 'loginController'
         })
         .when('/logout', {
             templateUrl: 'pages/account/logout.html',
             controller: 'logoutController'
         })
      .when('/recrutement', {
          templateUrl: 'pages/recrutement/recrutement.html',
          controller: 'recrutementController'
      })
      .when('/training', {
          templateUrl: 'pages/account/training.html',
          controller: 'trainingController'
      })
           
     .when('/candidates', {
         templateUrl: 'pages/recrutement/candidates.html',
         controller: 'candidatesController'
     })
     .when('/jobs', {
         templateUrl: 'pages/recrutement/jobs.html',
         controller: 'jobsController'
     })
    
     .when('/admin-dashboard', {
         templateUrl: 'pages/admin/admin-dashboard.html',
         controller: 'administratorController'
     })
     .when('/clients', {
         templateUrl: 'pages/admin/clients.html',
         controller: 'clientsController'
     })
     .when('/clientEdit', {
         templateUrl: 'pages/admin/clientEdit.html',
         controller: 'clientEditController'
     })
     .when('/clientViewJobs', {
         templateUrl: 'pages/admin/clientViewJobs.html',
         controller: 'clientViewJobsController'
     })
      .when('/jobAssignCandidate', {
          templateUrl: 'pages/admin/jobAssignCandidate.html',
          controller: 'jobAssignCandidateController'
      })    
     .when('/candidatesList', {
         templateUrl: 'pages/admin/candidatesList.html',
         controller: 'candidatesListController'
     })
     .when('/candidateInterview', {
         templateUrl: 'pages/admin/candidateInterview.html',
         controller: 'candidateInterviewController'
     })
      .when('/I-am-Interested', {
          templateUrl: 'pages/recrutement/IamInterested.html',
          controller: 'iamInterestedController'
      })
      .when('/succes', {
          templateUrl: 'pages/succes.html',
          controller: 'succesController'
      })

      .when('/Enquire', {
          templateUrl: 'pages/recrutement/enquire.html',
          controller: 'enquireController'
      })
      .when('/regiter-candidate', {
          templateUrl: 'pages/recrutement/reg_candidate.html',
          controller: 'enquireController'
      })
      .when('/regiter-company', {
          templateUrl: 'pages/recrutement/reg_company.html',
          controller: 'enquireController'
      })
       .when('/training', {
           templateUrl: 'pages/training/training.html',
           controller: 'trainingController'
       })
});
