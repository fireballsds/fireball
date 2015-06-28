'use strict';

angular.module('fireballApp')
  .directive('minutesAdd', function () {
    return {
      templateUrl: 'app/minutesAdd/minutesAdd.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });