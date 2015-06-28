'use strict';

angular.module('fireballApp')
  .controller('TabCtrl', function ($scope) {
    $scope.setTab = function(setTab){
        $scope.tab = setTab;
    };

    $scope.isSet = function(checkTab){
        return $scope.tab === checkTab;
    };
  });
