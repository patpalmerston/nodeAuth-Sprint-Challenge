const Users = require('./auth-model.js');
const db = require('../database/dbConfig');

describe('users model', () => {
	beforeEach(async () => {
		await db('users').truncate();
	});

	it('should set environment to testing', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});
});
