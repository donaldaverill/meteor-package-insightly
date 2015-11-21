if (Meteor.isServer) {
  Tinytest.add('Insightly - defined on server', function(test) {
    test.notEqual(Insightly, undefined, 'Expected ' +
      'Insightly to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('Insightly - undefined on client', function(test) {
    Insightly = Insightly || undefined;
    test.isUndefined(Insightly, 'Expected Insightly ' +
      'to be undefined on the client.');
  });
}
