import { api, requestConfig } from "../Utils/config";
const upload = "https://reactgram-api.herokuapp.com/api";

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

const uploadProfileImage = async (data) => {
  const config = requestConfig("POST", data, null, true);

  return await fetch(`${upload}/photos/twitter`, config).then((res) =>
    res.json()
  );
};

const userService = {
  getUserDetails,
  updateUser,
  uploadProfileImage,
};

export default userService;
