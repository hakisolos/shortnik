/** @format */
require('dotenv').config();
const express = require('express');
const conn = require('./config/mongodb');
const { createUser, findUrlByCode } = require('./controllers/user');
const User = require('./models/User');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.post('/submit', async (req, res) => {
	try {
		const { url } = req.body;
		if (!url) {
			return res.status(400).json(`url needed`);
		}
		const user = await createUser(url);
		const userCode = user.shortcode;
		const baseUrl = req.protocol + '://' + req.get('host');

		return res.status(200).json({
			Success: 'True',
			Url: `${baseUrl}/s/${userCode}`,
		});
	} catch (e) {
		console.log(e);
		return res.json(e);
	}
});
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
app.get('/s/:code', async (req, res) => {
	try {
		const code = req.params.code;

		// 🌟 Directly find the user with the shortcode
		const user = await User.findOne({ shortcode: code });

		if (!user) {
			return res.status(404).json({ message: 'No URL found for this code 😢' });
		}

		// 💨 Redirect to the original URL
		return res.redirect(user.url);
	} catch (e) {
		console.error('Redirect error 💥:', e);
		return res.status(500).json({ message: 'Server error 😢', error: e });
	}
});

app.listen(PORT, () => {
	conn();
	console.log(`running on http://localhost:${PORT}`);
});
