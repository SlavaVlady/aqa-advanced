const { getUser, getAllPosts, createPost, getCommentsForPost, createComment } = require('./api.js');

describe('ТTest for JSONPlaceholder API', () => {
  it('GET /users/:id', async () => {
    const response = await getUser(1);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
  });

  it('GET /posts list', async () => {
    const response = await getAllPosts();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  it('POST / create new post ', async () => {
    const newPost = {
      title: 'Test Post',
      body: 'This is a test post',
      userId: 1,
    };
    const response = await createPost(newPost);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
  });

  it('GET /posts/:id/comments', async () => {
    const response = await getCommentsForPost(1);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty('postId', 1);
  });

  it('POST /comments', async () => {
    const newComment = {
      postId: 1,
      name: 'Test Comment',
      email: 'test@example.com',
      body: 'This is a test comment',
    };
    const response = await createComment(newComment);
    expect(response.status).toBe(201);
    expect(response.data.body).toBe(newComment.body);
  });
});
