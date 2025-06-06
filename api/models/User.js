/** @format */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true,
	},
	shortcode: {
		type: String,
		required: true,
		unique: true,
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
