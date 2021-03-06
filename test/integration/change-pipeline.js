// describe('Change Pipeline', function () {
//   var $syncResource, syncer, scope, $q;

//   beforeEach(module('OmniBinder'));
//   beforeEach(inject(function ($rootScope, _$q_) {
//     scope = $rootScope;
//     $q = _$q_;
//     syncer = $syncResource({protocol: new VolatileProtocol({host: 'foobar'})})
//   }));

//   it('should not have hashKey in any delta property when binder.onModelChange is called', function () {
//     var deferred = $q.defer();
//     spyOn(deferred.promise, 'then');

//     var binder = syncer.bind({
//       scope: scope,
//       model: 'myArray',
//       type: 'collection',
//       onModelChange: function (binder, delta) {
//         expect(delta.data[0].$$hashKey).toBeUndefined();
//         expect(delta.data[0].bar).toEqual('baz');
//         expect(delta.newVal[0].$$hashKey).toBeUndefined();

//         return deferred.promise;
//       }
//     });

//     scope.myArray = [{$$hashKey: 'foo', bar: 'baz'}];
//     scope.$digest();

//     expect(deferred.promise.then).toHaveBeenCalled();
//   })
// })