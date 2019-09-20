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

	describe('POST /api/auth/login', () => {
		it('returns 201', async () => {
			let regUser = await request(server)
				.post('/api/auth/register')
				.send({ username: 'admin', password: 'admin' });
			expect(regUser.status).toBe(201);

			let logUser = await request(server)
				.post('/api/auth/login')
				.send({ username: 'admin', password: 'admin' });
			expect(logUser.body.token).toBeTruthy;
    });
    
    it('test 500', () => {
			return request(server)
				.post('/api/auth/login')
				.send({ password: 'admin' })
				.then(res => {
					expect(res.status).toBe(500);
				});
		});
	});

	describe('GET /api/jokes', () => {
		it('Return json OK', () => {
			return request(server)
				.get('/api/jokes')
				.expect('Content-Type', /json/);
    });
    
    it('test 500', () => {
      return request(server)
				.post('/api/jokes')
				.then(res => {
					expect(res.status).toBe(500);
				});
    })
	});
});
