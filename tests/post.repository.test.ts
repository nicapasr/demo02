import repo from '../src/repositories/post.repository';

jest.mock('../src/repositories/post.repository', () => ({
  PrismaPostRepository: jest.fn().mockImplementation(() => ({
    createPost: jest.fn().mockResolvedValue({
      id: 1,
      title: 'Test Title',
      content: 'Test Content',
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
    getPosts: jest.fn().mockResolvedValue([
      {
        id: 1,
        title: 'Test Title',
        content: 'Test Content',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  })),
}));

describe('Post Repository', () => {
  const postRepository = new repo.PrismaPostRepository();

  it('should create a post', async () => {
    const post = await postRepository.createPost('Test Title', 'Test Content');
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title', 'Test Title');
    expect(post).toHaveProperty('content', 'Test Content');
  });

  it('should get posts', async () => {
    const posts = await postRepository.getPosts();
    expect(posts).toHaveLength(1);
    expect(posts[0]).toHaveProperty('id');
    expect(posts[0]).toHaveProperty('title', 'Test Title');
    expect(posts[0]).toHaveProperty('content', 'Test Content');
  });
});