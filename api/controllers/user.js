/** @format */

const User = require('../models/User');
const generateShortCode = require('./randomcode');
const createUser = async (url, shortcode) => {
	try {
		if (!shortcode) {
			shortcode = generateShortCode();
		}
		const newUser = new User({
			url,
			shortcode,
		});
		await newUser.save();
		return { url: newUser.url, shortcode: newUser.shortcode };
	} catch (e) {
		console.log(e);
	}
};

const findUrlByCode = async code => {
	try {
		const url = await User.findOne({ shortcode: code }, 'url');
		if (url) {
			return url.url;
		} else {
			throw new Error('url not found...');
		}
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	createUser,
	findUrlByCode,
};
