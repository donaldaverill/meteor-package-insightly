if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('results', false);
  Session.setDefault('error', false);

  Template.hello.helpers({
    results() {
      return Session.get('results');
    },
    error() {
      return Session.get('error');
    }
  });

  Template.hello.events({
    'click button'() {
      const instance = Template.instance();
      const resource = instance.$('#insightlyResouceName').val();
      const results = Meteor.call('getInsightlyResource', resource, function(error, results) {
        if (error) {
          Session.set('error', error.reason);
          Session.set('results', null);
        } else {
          Session.set('results', results);
          Session.set('error', null);
          console.log('results', results);
        }
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    getInsightlyResource: function(resourceName) {
      if (!Meteor.settings || !Meteor.settings.insightly || !Meteor.settings.insightly.apiKey) {
        throw new Meteor.Error('no-api-key', 'Start with \'--settings settings.json\' and add your api key to the settings.json file.');
      }
      return Insightly.getResource(resourceName);
    }
  });
  Meteor.startup(function() {
    if (!Meteor.settings || !Meteor.settings.insightly || !Meteor.settings.insightly.apiKey) {
      console.log('Start with \'--settings settings.json\' and add your api key to the settings.json file.');
    }
  });
}
