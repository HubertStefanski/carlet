import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

//Connect to DB
mongoose.connect(process.env.mongoDB,
    { useNewUrlParser: true }).catch(error => handleError(error));

const db = mongoose.connection;


db.on('error', (err) => {
    console.log(`database connection error:${err}`);
});
db.on('disconnected', () => {
    console.log('database disconnected');
});
db.once('open', () => {
    console.log(`database connected to ${db.name} on ${db.host}`);
})