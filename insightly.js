Insightly = Insightly ? Insightly : {};

var baseURL = 'https://api.insight.ly/v2.1/';

Insightly.runQuery = function (uri) {
  var base = new Buffer(Meteor.settings.insightly.apiKey)
    .toString('base64');
  return JSON.parse(HTTP.get(uri, {
    headers: {
      'Authorization': 'Basic ' + base //, //'Accept-Encoding': 'gzip'*/
    }
  }).content);
};

Insightly.getResource = function (resource) {
  return this.runQuery(baseURL + resource);
};

Insightly.getTaskComments = function (taskID) {
  this.runQuery(baseURL + '/Tasks/' + taskID + '/Comments');
};
