// const request = require('supertest');
// const server = require('../api/server');
// const db = require('../database/dbConfig');
// const bcrypt = require('bcryptjs');

// describe('server', () => {
// 	beforeEach(async () => {
// 		await db('users').truncate;
// 	});

// 	describe('POST /api/auth/register', () => {
// 		it('should return 201 ', () => {
// 			return request(server)
// 				.post('/api/auth/register')
// 				.send({
// 					username: 'jack',
// 					password: 'jack'
// 				})
// 				.set('Content-Type', 'application/json')
// 				.then(res => {
// 					expect(res.status).toBe(201);
// 					expect(res.body.username).toBe('jack');
// 				});
//     });
    
//     it('username', () => {
//       return request(server).post('/api/auth/register')
//         .send({
//           username: "kel",
//           password: "kel"
//         })
//         .set('Content-Type', 'application/json')
//         .then(res => {
//           expect(res.status).toBe(201)
//           expect(res.body.username).toBe('kel')
//         })
//     })
// 	});
// });
