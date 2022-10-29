const transporter = require('../connections/emailConnection');

const sentRoleUpdatedSuccessfulEmail = (emailId, updatedRole) => {
    const mailOptions = {
        from: 'shadow.works',
        to: emailId,
        subject: 'Role Updated',
        template: 'roleUpdatedSuccessfulMail',
        context: {
            role: updatedRole
        }
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email has been sent to: ${emailId}`);
        }
    });
};

module.exports = sentRoleUpdatedSuccessfulEmail;
