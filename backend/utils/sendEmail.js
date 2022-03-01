const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  // const transporter = nodeMailer.createTransport({
  //   host: process.env.SMPT_HOST,
  //   port: process.env.SMPT_PORT,
  //   service: process.env.SMPT_SERVICE,
  //   auth: {
  //     user: process.env.SMPT_MAIL,
  //     pass: process.env.SMPT_PASSWORD,
  //   },
  // });

  var transporter = nodeMailer.createTransport({
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  // const mailOptions = {
  //   from: process.env.SMPT_MAIL,
  //   to: options.email,
  //   subject: options.subject,
  //   text: options.message,
  // };

  var mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // await transporter.sendMail(mailOptions);

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;
