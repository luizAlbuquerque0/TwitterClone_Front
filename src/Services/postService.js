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

const deletePost = async (id, token) => {
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(`${api}/posts/${id}`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const editPost = async (post, token) => {
  const config = requestConfig("PUT", post, token);

  try {
    const res = await fetch(`${api}/posts`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/posts/${id}`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const addComment = async (data, token) => {
  const config = requestConfig("POST", data, token);

  try {
    const res = await fetch(`${api}/posts/${data.id}/comments`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const postService = {
  getAllUserPosts,
  createAPost,
  getAllPosts,
  deletePost,
  editPost,
  getPostById,
  addComment,
};

export default postService;
