import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CostumerSchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    secondLastName: String,
    phonNumber: String,
    email: String,
    deleted: String
});

export default mongoose.model('Costumer', CostumerSchema);