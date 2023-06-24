import axios from "axios";

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
const dislikePost = async (postId, token) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "POST",
    url: `/api/posts/dislike/${postId}`,
    headers: { authorization: token },
    data: {},
  });
  if (status === 201) {
    return posts;
  }
};

export { likePost, dislikePost };
