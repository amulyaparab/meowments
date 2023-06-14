import axios from "axios";

const encodedToken = localStorage.getItem("encodedToken");

const fetchUsers = async () => {
  const {
    data: { users },
    status,
  } = await axios.get("/api/users");
  if (status === 200) {
    return users;
  }
};

const fetchSingleUser = async (userId) => {
  const {
    data: { user },
    status,
  } = await axios.get(`/api/users/${userId}`);
  if (status === 200) {
    return user;
  }
};

const editUser = async (usersEditedData) => {
  const {
    status,
    data: { user },
  } = await axios({
    method: "POST",
    url: "/api/users/edit",
    data: { userData: usersEditedData },
    headers: { authorization: encodedToken },
  });
  if (status === 201) {
    return user;
  }
};

export { fetchUsers, fetchSingleUser, editUser };
