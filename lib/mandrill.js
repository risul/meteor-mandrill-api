var mandrill = Npm.require('mandrill-api');

if (Meteor.settings.mandrill)Mandrill = new mandrill.Mandrill(Meteor.settings.mandrill.key);
else throw new Meteor.Error(404, 'Mandrill API key is required in settings');