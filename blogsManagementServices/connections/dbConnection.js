const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017';
const dbName = 'blogsCollections';

mongoose.connect(`${dbURL}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection is established with DB');
}).catch(err => {
    console.log(`Failed to connect with DB due to ${err}`);
});
