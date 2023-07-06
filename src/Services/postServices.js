import axios from "axios";

const getAllPosts = async () => {
  const {
    data: { posts },
    status,
  } = await axios.get("/api/posts");
  if (status === 200) {
    return posts;
  }
};

const getSinglePost = async (postId) => {
  const {
    data: { post },
    status,
  } = await axios.get(`/api/posts/${postId}`);
  if (status === 200) {
    return post;
  }
};

const getPostsByUser = async (username) => {
  const {
    data: { posts },
    status,
  } = await axios.get(`/api/posts/user/${username}`);
  if (status === 200) {
    return posts;
  }
};

const newPost = async (post, token) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "POST",
    url: "/api/posts",
    headers: { authorization: token },
    data: { postData: post },
  });
  if (status === 201) {
    return posts;
  }
};
const deletePost = async (postId, token) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "DELETE",
    url: `/api/posts/${postId}`,
    headers: { authorization: token },
  });
  if (status === 201) {
    return posts;
  }
};

const editPost = async (postId, postData, token) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "POST",
    url: `/api/posts/edit/${postId}`,
    headers: { authorization: token },
    data: { postData },
  });
  if (status === 201) {
    return posts;
  }
};

export {
  getAllPosts,
  getPostsByUser,
  getSinglePost,
  newPost,
  editPost,
  deletePost,
};
