import axios from "axios";

const userData = localStorage.getItem("userData");
const encodedToken = JSON.parse(userData)?.encodedToken;
const likePost = async (postId, token) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "POST",
    url: `/api/posts/like/${postId}`,
    headers: { authorization: token },
    data: {},
  });
  if (status === 201) {
    return posts;
  }
};
const dislikePost = async (postId) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "POST",
    url: `/api/posts/dislike/${postId}`,
    headers: { authorization: encodedToken },
    data: {},
  });
  if (status === 201) {
    return posts;
  }
};

export { likePost, dislikePost };
