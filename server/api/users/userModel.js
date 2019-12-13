import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: String,
    password: String,
    email: String,
    avatar: String,
    regDate: Date,
    userRating: Number,
    ownedCar: String
});

export default mongoose.model('User', UserSchema);  