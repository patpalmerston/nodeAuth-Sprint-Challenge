const jwt = require('json');

const secrets = require('../config/secrets');

module.exports = {
	generateToken
};

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username
	};

	const options = {
		expiresIn: '1h'
	};

	return jwt.sign(payload, secrets.jwtSecret, options);
}
