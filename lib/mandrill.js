var mandrill, client, conf;

mandrill = Npm.require('mandrill-api/mandrill');
conf = Meteor.settings.mandrill;

if (conf) {
    var SMTP = conf.SMTP;
    var APIKey = conf.key;

    //check if we have smtp.user
    if (SMTP && SMTP.user) {
        
        //sets default smtp host & port
        if (!SMTP.host) SMTP.host = "smtp.mandrillapp.com";
        if (!SMTP.port) SMTP.port = "587";
        
        // sets the environment variable for SMTP server
        process.env.MAIL_URL = "smtp://" + SMTP.user + ":" + APIKey + "@" + SMTP.host + ":" + SMTP.port + "/";
        
        console.log("=> MAIL_URL env variable added");
    }


    if (APIKey) {
        client = new mandrill.Mandrill(APIKey);

        Mandrill = {
            users: Meteor.wrapAsync(function(method, options, callback) {
                return client.users[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            messages: Meteor.wrapAsync(function(method, options, callback) {
                return client.messages[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            tags: Meteor.wrapAsync(function(method, options, callback) {
                return client.tags[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            rejects: Meteor.wrapAsync(function(method, options, callback) {
                return client.rejects[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            whitelists: Meteor.wrapAsync(function(method, options, callback) {
                return client.whitelists[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            senders: Meteor.wrapAsync(function(method, options, callback) {
                return client.senders[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            urls: Meteor.wrapAsync(function(method, options, callback) {
                return client.urls[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            templates: Meteor.wrapAsync(function(method, options, callback) {
                return client.templates[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            webhooks: Meteor.wrapAsync(function(method, options, callback) {
                return client.webhooks[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            subaccounts: Meteor.wrapAsync(function(method, options, callback) {
                return client.subaccounts[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            inbound: Meteor.wrapAsync(function(method, options, callback) {
                return client.inbound[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            exports: Meteor.wrapAsync(function(method, options, callback) {
                return client.exports[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            ips: Meteor.wrapAsync(function(method, options, callback) {
                return client.ips[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            metadata: Meteor.wrapAsync(function(method, options, callback) {
                return client.metadata[method](options, function(result) {
                    return callback(null, result);
                }, function(err) {
                    return callback(new Error(JSON.stringify(err)));
                });
            }),
            
            getMessageParams: function(subject, msg, mailTo, fromName, fromEmail, replyTo) {
                //if fromname and fromemail is empty, use defaults from settings
                if (!fromEmail) fromEmail = conf.defaults.from_email;
                if (!fromName) fromName = conf.defaults.from_name;
                
                //if replyTo is empty, use from_email
                if (!replyTo) replyTo = fromEmail;
                
                //if to is a string, change it to object in array
                if (typeof mailTo == 'string' || mailTo instanceof String) mailTo = [{ "email": mailTo }];
                
                // creating the message object
                var message = {
                    "html": msg,
                    "subject": subject,
                    "from_email": fromEmail,
                    "from_name": fromName,
                    "to": mailTo,
                    "headers": {
                        "Reply-To": replyTo
                    },
                    "important": false,
                    "track_opens": null,
                    "track_clicks": null,
                    "auto_text": null,
                    "auto_html": null,
                    "inline_css": null,
                    "url_strip_qs": null,
                    "preserve_recipients": null,
                    "bcc_address": null,
                    "tracking_domain": null,
                    "signing_domain": null,
                    "merge": true,
                    "global_merge_vars": [],
                    "merge_vars": [],
                    "tags": [],
                    "google_analytics_domains": [],
                    "google_analytics_campaign": null,
                    "metadata": null,
                    "recipient_metadata": [],
                    "attachments": [],
                    "images": []
                };
                
                var sendAsync = conf.defaults.sendAsync || false;
                
                //finalize message params
                var messageParams = {
                    message: message,
                    async: sendAsync,
                    ip_pool: null,
                    send_at: null
                };
                
                return messageParams;
            }
        };
    }
    else {
        throw new Meteor.Error(404, 'Mandrill API key not found in settings');
    }

}
else {
    throw new Meteor.Error(404, 'Mandrill config section not found in settings!');
}