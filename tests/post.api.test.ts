import request from 'supertest';

import app from '../src/app';

test('GET /posts :: Success to get all posts', async () => {
  const response = await request(app).get('/posts');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
});

test('POST /posts :: Create a new post', async () => {
  const response = await request(app)
    .post('/posts')
    .send({
      title: 'title',
      content: 'content',
    });

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('title', 'title');
  expect(response.body).toHaveProperty('content', 'content');
});