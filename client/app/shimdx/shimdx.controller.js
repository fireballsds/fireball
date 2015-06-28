'use strict';

angular.module('fireballApp')
  .controller('ShimdxCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.tab = 1;
    $scope.setTab = function(setTab){
        $scope.tab = setTab;
    };
    $scope.isSet = function(checkTab){
        console.log($scope.tab+' '+checkTab);
        return $scope.tab === checkTab;
    };
  });
