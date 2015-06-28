'use strict';

angular.module('fireballApp')
  .controller('MinutesCtrl', function ($scope) {
    $scope.tab = 1;
    $scope.setTab = function(setTab){
        $scope.tab = setTab;
        console.log("setTab " + $scope + " " + setTab);
    };

    $scope.isSet = function(checkTab){
        console.log("isSet " + $scope.tab + " " + checkTab);
        return $scope.tab === checkTab;
    };
  });
