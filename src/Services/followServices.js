import axios from "axios";

const userData = localStorage.getItem("userData");
const encodedToken = JSON.parse(userData)?.encodedToken;
const followUser = async (followUserId) => {
  const { data, status } = await axios({
    method: "POST",
    url: `/api/users/follow/${followUserId}`,
    headers: { authorization: encodedToken },
    data: {},
  });
  if (status === 200) {
    return data;
  }
};
const unfollowUser = async (followUserId) => {
  const { data, status } = await axios({
    method: "POST",
    url: `/api/users/unfollow/${followUserId}`,
    headers: { authorization: encodedToken },
    data: {},
  });
  if (status === 200) {
    return data;
  }
};
export { followUser, unfollowUser };
