import prisma from '../client';

prisma.$connect();

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IPostRepository {
  createPost(title: string, content: string): Promise<Post>;
  getPosts(): Promise<Post[]>;
}

class PrismaPostRepository implements IPostRepository {
  async createPost(title: string, content: string): Promise<Post> {
    try {
      const post = await prisma.post.create({
        data: {
          title,
          content,
        },
      });
      return post;
    } catch (error) {
      throw new Error('Error creating post');
    }
  }

  async getPosts(): Promise<Post[]> {
    try {
      const posts = await prisma.post.findMany();
      return posts;
    } catch (error) {
      throw new Error('Error getting posts');
    }
  }
}
export default {
  PrismaPostRepository,
};
