import { api, requestConfig } from "../Utils/config";

const getUserDetails = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/${id}`, requestConfig)
      .then((res) => res.json())
      .catch((err) => err);
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  getUserDetails,
};

export default userService;
