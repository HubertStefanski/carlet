import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    type: String,
    picture: String,
    brand: String,
    model: String,
    year: Number,
    owner: String,
    price: Number,
});

export default mongoose.model('Car', CarSchema)