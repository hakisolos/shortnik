/** @format */

const crypto = require('crypto');

const generateShortCode = () => {
	const code = crypto.randomBytes(4).toString('hex');
	return code;
};

module.exports = generateShortCode;
