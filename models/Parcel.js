import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ParcelSchema = new Schema({
    name: String,
    deleted: String
});

export default mongoose.model('Parcel', ParcelSchema);