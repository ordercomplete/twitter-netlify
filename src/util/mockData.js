// file mockData.js

const POSTS_KEY = "posts";

export const getPosts = () => {
  const postsString = localStorage.getItem(POSTS_KEY);
  return postsString ? JSON.parse(postsString) : [];
};

export const savePosts = (posts) => {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
};

export const createPost = (post) => {
  const posts = getPosts();
  posts.unshift(post);
  savePosts(posts);
  return post;
};

export const createReply = (postId, reply) => {
  const posts = getPosts();
  const post = posts.find((p) => p.id === postId);
  if (post) {
    if (!post.reply) {
      post.reply = [];
    }
    post.reply.unshift(reply);
    savePosts(posts);
    console.log("Reply added:", reply); // Логування для перевірки
    console.log("Updated post with replies:", post); // Перевірити, чи відповіді додаються
    return reply;
  }
  throw new Error("Post not found");
};

export const getPostById = (postId) => {
  const posts = getPosts();
  return posts.find((post) => post.id === postId) || null;
};

export const deletePost = (postId) => {
  const posts = getPosts();
  const updatedPosts = posts.filter((post) => post.id !== postId);
  savePosts(updatedPosts);
};

export const deleteReply = (postId, replyId) => {
  const posts = getPosts();
  const post = posts.find((p) => p.id === postId);
  if (post && post.reply) {
    post.reply = post.reply.filter((reply) => reply.id !== replyId);
    savePosts(posts);
  }
};
