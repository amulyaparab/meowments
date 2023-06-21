import axios from "axios";
import { useAuth } from "../Contexts/AuthProvider";

const userData = localStorage.getItem("userData");
const encodedToken = JSON.parse(userData)?.encodedToken;

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
  if (status === "200") {
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
console.log({ encodedToken });

const newPost = async (post, token) => {
  console.log({ token });
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
const deletePost = async (postId) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "DELETE",
    url: `/api/posts/${postId}`,
    headers: { authorization: encodedToken },
  });
  if (status === 201) {
    return posts;
  }
};

const editPost = async (postId, postData) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "POST",
    url: `/api/posts/edit/${postId}`,
    headers: { authorization: encodedToken },
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
