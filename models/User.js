const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema for User Collection
const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema);