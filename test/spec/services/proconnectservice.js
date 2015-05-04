'use strict';

describe('Service: ProConnectService', function () {

  // load the service's module
  beforeEach(module('proConnectApp'));

  // instantiate service
  var ProConnectService;
  beforeEach(inject(function (_ProConnectService_) {
    ProConnectService = _ProConnectService_;
  }));

  it('should do something', function () {
    expect(!!ProConnectService).toBe(true);
  });

});
