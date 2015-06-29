'use strict';

angular.module('fireballApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('agenda', {
        url: '/agenda',
        templateUrl: 'app/agenda/agenda.html',
        controller: 'AgendaCtrl'
      });
  });