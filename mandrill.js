var mandrill = Npm.require('mandrill-api/mandrill');
var Mandrill = new mandrill.Mandrill(Meteor.settings.mandrill.key);