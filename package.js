Package.describe({
    name: 'risul:mandrill',
    summary: 'Mandrill REST api wrapped as Meteor package',
    version: '1.2.1_4',
    git: 'https://github.com/risul/meteor-mandrill-api'
});

Npm.depends({
    "mandrill-api": '1.0.45'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.export('Mandrill');
    api.addFiles('lib/mandrill.js', 'server');
});