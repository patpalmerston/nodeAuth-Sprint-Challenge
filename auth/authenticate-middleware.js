/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
	const token = req.headers.authorization;
	console.log(token);

	if (token) {
		jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
			if (err) {
				console.err(err);
				res.status(401).json({ error: 'token did not work' });
			} else {
				req.decodedToken = decodedToken;
				console.log('decoded token', req.decodedJwt);
				next();
			}
		});
	} else {
		res.status(500).json({ error: 'NO TOKEN' });
	}
};
