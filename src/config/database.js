const mongoose = require('mongoose');

const connectDatabase = () => {
    if(process.env.PRODUCTION == "YES"){
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.TEST_URI, {
            autoIndex: true
        }).then( (data) => {
            console.log(`MongoDB connected with server at ${data.connection.host}!`)}).catch( (err) => {
            console.log(err); });
    }
}

module.exports.connectDatabase = connectDatabase;