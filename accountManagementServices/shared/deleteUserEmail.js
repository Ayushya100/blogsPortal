const transporter = require('../connections/emailConnection');

const sendDeleteUserEmail = (emailId) => {
    const mailOptions = {
        from: 'shadow.works',
        to: emailId,
        subject: 'Account Deleted Successfully',
        template: 'accountDeleteSuccessfulMail'
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email has been sent to: ${emailId}`);
        }
    })
};

module.exports = sendDeleteUserEmail;
