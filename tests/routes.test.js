const request = require('supertest')
const app = require('../app')

describe('Post Endpoints', () => {
    
    it('rooms access', async () => {
      const res = await request(app)
        .get('/rooms');
      expect(res.statusCode).toEqual(302)
    });
  
    it('authentication', async () => {
        const res = await request(app)
        .post('/login')
        .send({
            username: 'admin',
            password: 'admin'
        });
        expect(res.statusCode).toEqual(302);
        
    });
  
    it('login access', async () => {
      const res = await request(app)
        .post('/login')
        .send({
            username: 'admin',
            password: 'admin'
        });
      const res2 = await request(app)
        .get('/rooms');
      expect(res2.statusCode).toEqual(200),
      expect(res2.body).toHaveProperty('name');
      
    });

});