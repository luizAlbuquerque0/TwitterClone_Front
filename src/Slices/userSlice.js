import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../Services/UserService";

const initialState = {
  user: {},
  loading: false,
  success: false,
  error: false,
  message: null,
};

export const getUserById = createAsyncThunk(
  "user/getUser",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.getUserDetails(id, token);

    return data;
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.updateUser(user, token);

    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
        state.message = "Usuario atualizado com sucesso";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = {};
      });
  },
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;
