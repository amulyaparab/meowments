import axios from "axios";

const getCommentsHandler = async (postId) => {
  const {
    data: { comments },
    status,
  } = await axios.get(`/api/comments/${postId}`);
  console.log(comments);
  if (status === 200) {
    return comments;
  }
};

const addCommentHandler = async (postId, commentData, token) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "POST",
    url: `/api/comments/add/${postId}`,
    headers: { authorization: token },
    data: { commentData },
  });

  if (status === 201) {
    return posts;
  }
};

const editCommentHandler = async (postId, commentId, commentData, token) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "POST",
    url: `/api/comments/edit/${postId}/${commentId}`,
    headers: { authorization: token },
    data: { commentData },
  });
  if (status === 201) {
    return posts;
  }
};

const deleteCommentHandler = async (postId, commentId, token) => {
  const {
    data: { posts },
    status,
  } = await axios({
    method: "POST",
    url: `/api/comments/delete/${postId}/${commentId}`,
    headers: { authorization: token },
    data: {},
  });
  if (status === 201) {
    return posts;
  }
};

export {
  getCommentsHandler,
  addCommentHandler,
  editCommentHandler,
  deleteCommentHandler,
};
