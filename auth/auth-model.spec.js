const Users = require('./auth-model.js');
const db = require('../database/dbConfig');

describe('users model', () => {
	beforeEach(async () => {
		await db('users').truncate();
	});

	it('should set environment to testing', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});

	describe('add()', () => {
		it('should add User into the db', async () => {
			await Users.add({ username: 'Pat', password: 'Pat' });

			let users = await db('users');
			// console.log(users);
			expect(users).toHaveLength(1);
		});
	});

	describe('add()', () => {
		it('should add User into the db', async () => {
			await Users.add({ username: 'Pat', password: 'Pat' });
			await Users.add({ username: 'Kel', password: 'Kel' });

			let users = await db('users');
			// console.log(users);
			expect(users).toHaveLength(2);
		});
	});
});
