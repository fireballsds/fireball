'use strict';

describe('Controller: ShimdxCtrl', function () {

  // load the controller's module
  beforeEach(module('fireballApp'));

  var ShimdxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShimdxCtrl = $controller('ShimdxCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
