const transporter = require('../connections/emailConnection');

const sentUpdatePasswordSuccessfulEmail = (emailId) => {
    const mailOptions = {
        from: 'shadow.works',
        to: emailId,
        subject: 'Password updated successfully',
        template: 'passwordUpdatedSuccessfulMail',
        context: {}
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email has been sent to: ${emailId}`);
        }
    })
}

module.exports = sentUpdatePasswordSuccessfulEmail;
