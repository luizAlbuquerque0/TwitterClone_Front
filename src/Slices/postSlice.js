import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "../Services/postService";

const initialState = {
  posts: [],
  post: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

export const gettAllUserPosts = createAsyncThunk(
  "post/userPosts",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await postService.getAllUserPosts(id, token);

    return data;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
    resetPosts: (state) => {
      state.posts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(gettAllUserPosts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(gettAllUserPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.posts = action.payload;
      });
  },
});

export const { resetMessage, resetPosts } = postSlice.actions;
export default postSlice.reducer;
