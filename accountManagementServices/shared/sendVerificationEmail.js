const {v4: uuidv4} = require('uuid');

const transporter = require('../connections/emailConnection');

const sendVerificationEmail = (id, emailId) => {
    const currentUrl = 'http://localhost:3200/api/v1/users/verify/';
    const uniqueString = uuidv4() + id;

    const mailOptions = {
        from: 'shadow.works',
        to: emailId,
        subject: 'Verify to activate your Account',
        template: 'verificationMail',
        context: {
            verificationCode: currentUrl + id + '/' + Date.now() + '/' + uniqueString
        }
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Email has been sent to: ', emailId);
        }
    });

    return uniqueString;
}

module.exports = sendVerificationEmail;
