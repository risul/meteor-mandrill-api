meteor-mandrill
===============

Mandrill REST API `mandrill-api` NPM package for Meteor.

## Installation
```bach
    meteor add risul:mandrill
```

## Required settings
Add this to your settings.json or METEOR_SETTINGS env variable

```json
{
    "mandrill": {
        "key": "YOUR_MANDRILL_API_KEY"
    }
}
```

## Enable SMTP
If you want to automacitally set the environment variable for SMTP server so that Meteor's [Email package](http://docs.meteor.com/#/full/email) works out of the box, you will need to add "SMTP" section in settings: 

```json
{
    "mandrill": {
        "key": "YOUR_MANDRILL_API_KEY",
        
        "SMTP": {
            "user": "YOUR_MANDRILL_USERNAME",
            "host": "smtp.mandrillapp.com",
            "port": "2525"
        }
    }
}
```

SMTP host: `mandrill.SMTP.host` and SMTP port: `mandrill.SMTP.port` are optional.


## Additional settings
You can also add a `defaults` section with default sender name and e-mail

```json
{
    "mandrill": {
        "key": "YOUR_MANDRILL_API_KEY",
        
        "SMTP": {
            "user": "YOUR_MANDRILL_USERNAME",
            "host": "smtp.mandrillapp.com",
            "port": "2525"
        },
        
        "defaults": {
            "from_name": "YOUR_APP_NAME",
            "from_email": "DEFAULT_E-MAIL_ADDRESS"
        }
    }
}
```

.. and then get all needed message parameters before you send an e-mail using the API.

```js
    var mailparams = Mandrill.getMessageParams("Email subject", "Email body", "recipient@domain.com");
```

You can also change from name, from email and reply to email address:

```js
    var mailparams = Mandrill.getMessageParams(subject, msg, mailTo, fromName, fromEmail, replyTo);
```

This will return a complete Mandrill message parameter object which you can use to send the email:

```js
    try {
        var result = Mandrill.messages('send', mailparams);
        console.log("Email sent", result);
    }
    catch (err) {
        console.log("Could not send email", err);
    }
```

List of API's supported by the library.
=======================================
Refer [here](https://mandrillapp.com/api/docs/index.nodejs.html) for complete documentation of Mandrill NodeJS API documentation.