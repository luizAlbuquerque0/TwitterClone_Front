import { api, requestConfig } from "../Utils/config";

const getUserDetails = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/users/${id}`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (data, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(`${api}/users`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  getUserDetails,
  updateUser,
};

export default userService;
