import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String,
    roleId: String,
    deleted: String
});

export default mongoose.model('User', UserSchema);