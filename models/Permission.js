import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PermissionSchema = new Schema({
    name: String
});

export default mongoose.model('Permission', PermissionSchema);