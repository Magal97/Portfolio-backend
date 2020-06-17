import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model("forms", FormSchema);