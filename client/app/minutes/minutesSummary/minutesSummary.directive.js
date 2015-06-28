'use strict';

angular.module('fireballApp')
  .directive('minutesSummary', function () {
    return {
      templateUrl: 'app/minutes/minutesSummary/minutesSummary.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
