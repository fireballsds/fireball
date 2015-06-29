'use strict';

describe('Controller: AgendaCtrl', function () {

  // load the controller's module
  beforeEach(module('fireballApp'));
  beforeEach(module('socketMock'));

  var AgendaCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
/*    $httpBackend.expectGET('/api/agendas')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);*/

    scope = $rootScope.$new();
    AgendaCtrl = $controller('AgendaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });


});
