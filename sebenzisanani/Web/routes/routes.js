﻿app.config(function ($routeProvider, $locationProvider) {
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
});
 