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

export const createAPost = createAsyncThunk(
  "post/createPost",
  async (post, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await postService.createAPost(post, token);

    if (data.errors) {
      thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const getAllPosts = createAsyncThunk(
  "posts/posts",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await postService.getAllPosts(token);

    return data;
  }
);

export const deletePost = createAsyncThunk(
  "post/delete",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await postService.deletePost(id, token);

    return data;
  }
);

export const editPost = createAsyncThunk(
  "post/update",
  async (post, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await postService.editPost(post, token);

    return data;
  }
);

export const getPostById = createAsyncThunk(
  "post/getById",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await postService.getPostById(id, token);

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
      })
      .addCase(createAPost.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createAPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.post = action.payload;
        state.posts.unshift(state.post);
        state.message = "Post create com sucesso";
      })
      .addCase(createAPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.post = {};
      })
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.posts = state.posts.filter((post) => {
          return post.id !== action.payload.id;
        });
        state.message = action.payload.message;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.post = {};
      })
      .addCase(editPost.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return (post.content = action.payload.content);
          }
          return post;
        });
        state.message = "Tweet editado com sucesso";
      })
      .addCase(editPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPostById.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.post = action.payload;
      });
  },
});

export const { resetMessage, resetPosts } = postSlice.actions;
export default postSlice.reducer;
