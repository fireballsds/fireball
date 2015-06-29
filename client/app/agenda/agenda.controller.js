'use strict';

angular.module('fireballApp')
  .controller('AgendaCtrl', function ($scope, $http, socket) {
    $scope.dailyAgendas = [];

    $http.get('/api/agendas').success(function(dailyAgendas) {
      $scope.dailyAgendas = dailyAgendas;
      socket.syncUpdates('agenda', $scope.dailyAgendas);
    });

    $scope.addAgenda = function() {
      if($scope.newAgenda === '') {
        console.log('empty');
        return;
      }
      $http.post('/api/agendas', $scope.newAgenda);
      $scope.newAgenda = '';
    };

    $scope.deleteAgenda = function(agenda) {
      $http.delete('/api/agendas/' + agenda._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('agenda');
    });
  });
