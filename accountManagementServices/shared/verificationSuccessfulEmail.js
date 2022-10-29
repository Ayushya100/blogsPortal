const transporter = require('../connections/emailConnection');

const sendVerificationSuccessfulEmail = userInfo => {
    const mailOptions = {
        from: 'shadow.works',
        to: userInfo.emailId,
        subject: 'Account Verified successfully',
        template: 'verificationSuccessfulMail',
        context: {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            userName: userInfo.userName,
            phoneNo: userInfo.phoneNo,
            emailId: userInfo.emailId,
            role: userInfo.role,
            bio: userInfo.bio
        }
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        } else {
            console.log(`Email has been sent to: ${userInfo.emailId}`);
        }
    });
};

module.exports = sendVerificationSuccessfulEmail;
