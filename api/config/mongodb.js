/** @format */

const mongoose = require('mongoose');
const URI =
	'mongodb+srv://hakixer:mynameisexcel2@mern-app.6jk1agk.mongodb.net/?retryWrites=true&w=majority&appName=mern-app';

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
