import { api, requestConfig } from "../Utils/config";

const getAllUserPosts = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/posts/user/${id}`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const createAPost = async (data, token) => {
  const config = requestConfig("POST", data, token);

  try {
    const res = await fetch(`${api}/posts`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getAllPosts = async (token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/posts`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const postService = {
  getAllUserPosts,
  createAPost,
  getAllPosts,
};

export default postService;
