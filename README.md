# Deprecated

This package was a thin wrapper around the Node.js mandrill-api package, which in turn does [nothing more than use Mandrill's HTTP API](https://bitbucket.org/mailchimp/mandrill-api-node/src/). As such, you're better off using the wylio:mandrill package, which is a full implementation of Mandrill's direct HTTP API, along with tests and a guide to how to use Meteor's default `Accounts.emailTemplates` with Mandrill.
