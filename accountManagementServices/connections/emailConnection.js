const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xyz@abc.com',
        pass: 'abseajsejkkasejk'
    }
});

const handlebarsOptions = {
    viewEngine: {
        extName: '.handlebars',
        partialsDir: path.resolve('./templates'),
        defaultLayout: false
    },
    viewPath: path.resolve('./templates'),
    extName: '.handlebars'
};

transporter.use('compile', hbs(handlebarsOptions));

module.exports = transporter;
