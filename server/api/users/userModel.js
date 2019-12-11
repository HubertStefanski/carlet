import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    uid: String,
    name: String,
    avatar: String,
    regDate: Date,
    email: String,
    userRating: Number,
    OwnedCar: String
});

export default mongoose.model('User', UserSchema);