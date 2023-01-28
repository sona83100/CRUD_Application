const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
     /* created: {
        type: DataTransfer,
        required: true,
        default: DataTransfer.now,
    },  */
});

module.exports = mongoose.model("User", userSchema);