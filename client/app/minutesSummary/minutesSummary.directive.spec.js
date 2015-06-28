'use strict';

describe('Directive: minutesSummary', function () {

  // load the directive's module and view
  beforeEach(module('fireballApp'));
  beforeEach(module('app/minutesSummary/minutesSummary.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<minutes-summary></minutes-summary>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the minutesSummary directive');
  }));
});