'use strict';

angular.module('fireballApp')
  .controller('AgendaCtrl', function ($scope, $http, socket) {
    $scope.agendas = [];

    $http.get('/api/agendas').success(function(agendas) {
      $scope.agendas = agendas;
      for (var i=0;i<agendas.length;i++){
        agendas[i].imgNo=Math.floor((Math.random() * 9) + 1);
      }
      socket.syncUpdates('agenda', $scope.agendas);
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
