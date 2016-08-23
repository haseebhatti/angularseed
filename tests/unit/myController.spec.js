describe('myController', function () {
  var $controller;
  beforeEach(module('myApp'));
  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));
  describe('defined', function () {
    it('should be defined', function () {
      expect($controller).toBeDefined();
    });
  });
});
