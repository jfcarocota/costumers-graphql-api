import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PackageSchema = new Schema({
    account: String,
    password: String,
    costumerId: String,
    parcelId: String,
    deleted: String
});

export default mongoose.model('Package', PackageSchema);