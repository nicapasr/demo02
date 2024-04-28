import request from 'supertest';

import app from '../src/app';

test('GET /', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.body).toEqual({
    message: 'Hello World from TypeScript',
  });
});