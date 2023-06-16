import axios from "axios";

const encodedToken = localStorage.getItem("encodedToken");

const bookmarkPost = async (postId) => {
  const {
    data: { bookmarks },
    status,
  } = await axios({
    method: "POST",
    url: `/api/users/bookmark/${postId}`,
    headers: { authorization: encodedToken },
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