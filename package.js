Package.describe({
  name: 'fourquet:insightly',
  version: '0.0.1',
  summary: 'Meteor package used to retrieve data from Insight.ly',
  git: 'https://github.com/fourquet/meteor-package-insightly',
  documentation: 'README.md',
  license: 'LICENSE',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.use('http', 'server');
  api.export('Insightly', 'server');
  api.addFiles('insightly.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fourquet:insightly');
  api.addFiles('insightly-tests.js');
});
