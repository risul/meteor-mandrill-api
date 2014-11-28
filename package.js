Package.describe({
    name: 'risul:mandrill',
    summary: 'Mandrill REST api packaged for Meteor',
    version: '1.0.0',
    git: 'git@github.com:risul/meteor-mandrill.git'
});

Npm.depends({
    "mandrill-api": '1.0.41'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addFiles('mandrill.js', 'server');
});