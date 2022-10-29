const transporter = require('../connections/emailConnection');

const sendDeactivateUserEmail = (emailId) => {
    const mailOptions = {
        from: 'shadow.works',
        to: emailId,
        subject: 'Account deactivated!!!',
        template: 'accountDeactivateSuccessfulMail'
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email has been sent to: ${emailId}`);
        }
    })
};

module.exports = sendDeactivateUserEmail;
