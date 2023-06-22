import axios from "axios";

const followUser = async (followUserId, token) => {
  const { data, status } = await axios({
    method: "POST",
    url: `/api/users/follow/${followUserId}`,
    headers: { authorization: token },
    data: {},
  });
  if (status === 200) {
    return data;
  }
};
const unfollowUser = async (followUserId, token) => {
  const { data, status } = await axios({
    method: "POST",
    url: `/api/users/unfollow/${followUserId}`,
    headers: { authorization: token },
    data: {},
  });
  if (status === 200) {
    return data;
  }
};
export { followUser, unfollowUser };
