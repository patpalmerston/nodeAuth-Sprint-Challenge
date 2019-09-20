const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');
const bcrypt = require('bcryptjs');

describe('server', () => {
	beforeEach(async () => {
		await db('users').truncate();
	});

	describe('environment test', () => {
		it('set env to testing', () => {
			expect(process.env.DB_ENV).toBe('testing');
		});
	});

	describe('POST /api/auth/register', () => {
		it('returns 201', () => {
			return request(server)
				.post('/api/auth/register')
				.send({ username: 'admin', password: 'admin' })
				.then(res => {
					expect(res.status).toBe(201);
				});
		});
		it('test 500', () => {
			return request(server)
				.post('/api/auth/register')
				.send({ password: 'admin' })
				.then(res => {
					expect(res.status).toBe(500);
				});
		});
	});
});
