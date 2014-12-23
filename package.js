Package.describe({
    name: 'risul:mandrill',
    summary: 'Mandrill REST api packaged for Meteor',
    version: '1.1.2',
    git: 'https://github.com/risul/meteor-mandrill-api'
});

Npm.depends({
    "mandrill-api": '1.0.41'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.2.2');
    api.export('Mandrill');
    api.addFiles('lib/mandrill.js', 'server');
});