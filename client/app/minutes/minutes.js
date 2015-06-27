'use strict';

angular.module('fireballApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('minutes', {
        url: '/minutes',
        templateUrl: 'app/minutes/minutes.html',
        controller: 'MinutesCtrl'
      });
  });