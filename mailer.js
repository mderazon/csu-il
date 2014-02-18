var nodemailer = require("nodemailer");

module.exports = function(options, callback) {
  if (!options.name) throw new Error('options.name is required');
  if (!options.email) throw new Error('options.email is required');
  if (!options.message) throw new Error('options.message is required');

  var name = options.name;
  var email = options.email;
  var message = options.message;

  // create reusable transport method (opens pool of SMTP connections)
  var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "hotmail",
    auth: {
      user: 'contact@csunplugged.org.il',
      // pass: process.env.EMAIL_PASS,
      pass: 'HellYeahComputer',
    }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: name + "<" + email + ">",
    replyTo: email,
    to: "contact@csunplugged.org.il",
    subject: "New message from website",
    text: message,
  };

  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, function(error, response){
    smtpTransport.close(); // shut down the connection pool, no more messages
    return callback(error, response);
  });
};
