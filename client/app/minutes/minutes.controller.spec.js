'use strict';

describe('Controller: MinutesCtrl', function () {

  // load the controller's module
  beforeEach(module('fireballApp'));

  var MinutesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MinutesCtrl = $controller('MinutesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
