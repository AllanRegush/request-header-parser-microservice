const request = require('supertest');
const app = require('../server');

describe('Request Header Parser Service', () => {
    
    it('End Point is GET /api/whoami', async () => {
        const res = await request(app).get('/api/whoami');
        expect(res.statusCode).toEqual(200);
    });

    it('Returns IP Address, Browser Language, Browser Type', async () => {
        const res = await request(app).get('/api/whoami').set('accept-language', 'en-US');
        expect(res.body).toEqual({
            ipaddress: '127.0.0.1:3000',
            language: 'en-US',
            software: 'node-superagent/3.8.3'
        });
    });
});