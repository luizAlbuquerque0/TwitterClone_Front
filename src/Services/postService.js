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

const postService = {
  getAllUserPosts,
};

export default postService;
