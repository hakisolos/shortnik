/** @format */

const crypto = require('crypto');

const generateShortCode = () => {
	const code = crypto.randomBytes(4).toString('hex');
	console.log(code);
	return code;
};

generateShortCode();
