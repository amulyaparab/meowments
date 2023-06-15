import axios from "axios";

const encodedToken = localStorage.getItem("encodedToken");
const likePost = async (postId) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "POST",
    url: `/api/posts/like/${postId}`,
    headers: { authorization: encodedToken },
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
