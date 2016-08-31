describe('PasswordController', function() {
  beforeEach(module('app'));

  describe('SimpleController', function() {
    beforeEach(inject(function($templateCache,_$compile_,_$rootScope_, _$controller_) {
      template = $templateCache.get('templates/simple.html');
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      scope = $rootScope.$new();
      element = $compile(template)(scope);
    }));

    // https://toddmotto.com/digging-into-angulars-controller-as-syntax/
    it( 'renders the template', function(){
      ctrl = $controller('SimpleController as $ctrl', { $scope: scope, $element: element });
      scope.$digest();
      expect(element.html()).to.contain("hello")
    });

    it( 'wires up events', function(){
      ctrl = $controller('SimpleController as $ctrl', { $scope: scope, $element: element });
      scope.$digest();
      element.find('button').click();
      scope.$digest();
      expect(element.html()).to.contain("changed")
    });
  })

  describe('PasswordController', function() {
    var $controller;

    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

    describe('$scope.grade', function() {
      var $scope, controller;

      beforeEach(function() {
        $scope = {};
        controller = $controller('PasswordController', { $scope: $scope });
      });

      it('sets the strength to "strong" if the password length is >8 chars', function() {
        $scope.password = 'longerthaneightchars';
        $scope.grade();
        expect($scope.strength).to.equal('strong');
      });

      it('sets the strength to "weak" if the password length <3 chars', function() {
        $scope.password = 'a';
        $scope.grade();
        expect($scope.strength).to.equal('weak');
      });
    });
  })

  describe('MyController', function() {
   var $httpBackend, $rootScope, createController, authRequestHandler;

   beforeEach(inject(function($injector) {
     $httpBackend = $injector.get('$httpBackend');
     authRequestHandler = $httpBackend.when('GET', '/auth.py')
                            .respond({userId: 'userX'}, {'A-Token': 'xxx'});

     $rootScope = $injector.get('$rootScope');
     var $controller = $injector.get('$controller');

     createController = function() {
       return $controller('MyController', {'$scope' : $rootScope });
     };
   }));

   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

   it('should fetch authentication token', function() {
     $httpBackend.expectGET('/auth.py');
     var controller = createController();
     $httpBackend.flush();
   });

   it('should fail authentication', function() {
     authRequestHandler.respond(401, '');

     $httpBackend.expectGET('/auth.py').respond(401, '');
     var controller = createController();

     $httpBackend.flush();

     expect($rootScope.error).to.eq("Didn't work");
   });

   it('should send msg to server', function() {
     var controller = createController();
     $httpBackend.flush();

     $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
     $rootScope.saveMessage('message content');
     expect($rootScope.status).to.eq('Saving...');
     $httpBackend.flush();
     expect($rootScope.status).to.eq('');
   });

   it('should send auth header', function() {
     var controller = createController();
     $httpBackend.flush();

     $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
       return headers['Authorization'] == 'xxx';
     }).respond(201, '');

     $rootScope.saveMessage('whatever');
     $httpBackend.flush();
   });
  });

});
