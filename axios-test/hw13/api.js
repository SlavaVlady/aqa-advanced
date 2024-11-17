const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.interceptors.request.use(
  (config) => {
    console.log(config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log('Респонс:', response.status, response.statusText);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function getUser(id) {
  const response = await instance.get(`/users/${id}`);
  return response;
}

async function getAllPosts() {
  const response = await instance.get('/posts');
  return response;
}

async function createPost(data) {
  const response = await instance.post('/posts', data);
  return response;
}

async function getCommentsForPost(postId) {
  const response = await instance.get(`/posts/${postId}/comments`);
  return response;
}

async function createComment(data) {
  const response = await instance.post('/comments', data);
  return response;
}

module.exports = { getUser, getAllPosts, createPost, getCommentsForPost, createComment };

