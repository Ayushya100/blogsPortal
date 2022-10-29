const transporter = require('../connections/emailConnection');

const sendUpdateAccountSuccessfulEmail = (userInfo, createdDate, lastLogin) => {
    const mailOptions = {
        from: 'shadow.works',
        to: userInfo.emailId,
        subject: 'Account updated successfully',
        template: 'accountUpdatedSuccessfulMail',
        context: {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            userName: userInfo.userName,
            phoneNo: userInfo.phoneNo,
            emailId: userInfo.emailId,
            role: userInfo.role,
            bio: userInfo.bio,
            blogCount: userInfo.blogsCount,
            createdAt: createdDate,
            lastLogin: lastLogin,
            isVerified: userInfo.isVerified? 'yes' : 'no'
        }
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email has been sent to: ${userInfo.emailId}`);
        }
    });
};

module.exports = sendUpdateAccountSuccessfulEmail;
