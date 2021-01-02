import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name: String,
    permissionsIds: Array
});

export default mongoose.model('Role', RoleSchema);