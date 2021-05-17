const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please, provide a name.']
    },
    email: {
        type: String,
        required: [true, 'Please, provide a valid email address.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please, provide a password'],
        minlength: 6,
        maxlength: 15
    },

    token: String,

}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    user.password = await bcrypt.hash(user.password, 12);

    return next();

});

userSchema.methods.hideSensitiveData = function(user) {
    user.password = undefined;
    user.createdAt = undefined;
    user.updatedAt = undefined
    user.__v = undefined;
    user.token = undefined;

    return user;
}

userSchema.methods.generateToken = function (_id) {

    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
};

userSchema.methods.comparePasswords = async function (enteredPassword, existingPassword) {
    return await bcrypt.compare(enteredPassword, existingPassword);
};


userSchema.methods.generateValidCookieOption = function () {
    const validity = 1000 * 60 * 60 * 5;
    return {
        maxAge: validity,
        httpOnly: true,
        path: '/',
        sameSite: 'lax'
    };
};

userSchema.methods.generateInValidCookieOption = function () {
    const validity =  -1000 * (60 * 60);
    return {
        maxAge: validity,
        httpOnly: true,
        path: '/',
        sameSite: 'lax'
    };
}

const Users = mongoose.model('user', userSchema);

module.exports = Users;