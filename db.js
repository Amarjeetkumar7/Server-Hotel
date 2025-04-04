const mongoose = require('mongoose');


const connectDb = async () => {
 await mongoose.connect(`${process.env.url}/Hotel`)
    .then(() => console.log('mongodb connected successfully. . .'))
    .catch((err) => console.log("error in database connection", err))
}

module.exports = connectDb;


