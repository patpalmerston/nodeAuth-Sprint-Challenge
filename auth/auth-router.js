const router = require('express').Router();
const bcrypt = require('bcryptjs');
const tokenService = require('./token-service');
const Users = require('./auth-model');

router.post('/register', (req, res) => {
  let { username, password } = req.body;
  console.log(req.body)
	const hash = bcrypt.hashSync(password, 8);

	Users.add({ username, password: hash })
		.then(saved => {
			const token = tokenService.generateToken(saved);
			res
				.status(201)
				.json({
					message: `Hello ${saved.username} you are registered!`,
					token
				});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to register user' });
		});
});

router.post('/login', (req, res) => {
	// implement login
});

module.exports = router;
