import axios from "axios";

const userData = localStorage.getItem("userData");
const encodedToken = JSON.parse(userData)?.encodedToken;

const bookmarkPost = async (postId, token) => {
  const {
    data: { bookmarks },
    status,
  } = await axios({
    method: "POST",
    url: `/api/users/bookmark/${postId}`,
    headers: { authorization: token },
    data: {},
  });
  if (status === 200) {
    return bookmarks;
  }
};
const removeBookmark = async (postId) => {
  const {
    data: { bookmarks },
    status,
  } = await axios({
    method: "POST",
    url: `/api/users/remove-bookmark/${postId}`,
    headers: { authorization: encodedToken },
    data: {},
  });
  if (status === 200) {
    return bookmarks;
  }
};
const getAllBookmarks = async () => {
  const {
    data: { bookmarks },
    status,
  } = await axios({
    method: "GET",
    url: "/api/users/bookmark/",
    headers: { authorization: encodedToken },
  });
  if (status === 200) {
    return bookmarks;
  }
};

export { bookmarkPost, getAllBookmarks, removeBookmark };
