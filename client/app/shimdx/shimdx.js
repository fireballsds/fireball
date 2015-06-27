'use strict';

angular.module('fireballApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shimdx', {
        url: '/shimdx',
        templateUrl: 'app/shimdx/shimdx.html',
        controller: 'ShimdxCtrl'
      });
  });