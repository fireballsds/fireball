'use strict';

describe('Directive: minutesAdd', function () {

  // load the directive's module and view
  beforeEach(module('fireballApp'));
  beforeEach(module('app/minutesAdd/minutesAdd.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<minutes-add></minutes-add>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the minutesAdd directive');
  }));
});