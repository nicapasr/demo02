import express from 'express';
import PostController from './controllers/post.controller';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from TypeScript',
  });
});

app.post('/posts', PostController.createBlogPost);
app.get('/posts', PostController.getBlogPosts);

export default app;
