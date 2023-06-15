import axios from "axios";

const encodedToken = localStorage.getItem("encodedToken");
const followUser = async (followUserId) => {
  const { data, status } = await axios({
    method: "POST",
    url: `/api/users/follow/${followUserId}`,
    headers: { authorization: encodedToken },
    data: {},
  });
  if (status === 200) {
    console.log(data);
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
