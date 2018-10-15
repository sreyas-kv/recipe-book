const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//Schema for userDetailsSchema 
const userSchema = mongoose.Schema({
    firstName: { type: String, required: true, default: '' },
    lastName: { type: String, required: true, default: '' },
    email:{ type: String, required: true, default: '' },
    password: { type: String, required: false }
});

userSchema.methods.serialize = function() {
    return {
        firstName: this.firstName || '',
        lastName: this.lastName || '',
        email: this.email || ''
    };
};


const User = mongoose.model("User", userSchema, );

module.exports = { User };