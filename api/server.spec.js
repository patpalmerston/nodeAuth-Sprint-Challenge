const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');
const bcrypt = require('bcryptjs');

describe('server', () => {
	beforeEach(async () => {
		await db('users').truncate;
	});

	describe('POST /api/auth/register', () => {
		it('responds with json ', done => {
			request(server)
				.post('/api/auth/register')
				.send({
					username: 'jack'
				})
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(201)
				.end((err, res) => {
					if (err) return done(err);
					done();
				});
		});

		it('username', () => {
			return request(server)
				.post('/api/auth/register')
				.send({
					username: 'kel',
					password: 'kel'
				})
				.set('Content-Type', 'application/json')
				.then(res => {
					expect(res.status).toBe(201);
					expect(res.body.username).toBe('kel');
				});
		});
	});
});
