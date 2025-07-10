/** @format */

const mongoose = require('mongoose');
const URI =
	'mongodb+srv://hakixer:thi54dAl5brg3r41@shell-haki.snamlx9.mongodb.net/?retryWrites=true&w=majority&appName=shell-haki';

const conn = async () => {
	await mongoose.connect(
		URI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		console.log(' mongo connected')
	);
};
module.exports = conn;
