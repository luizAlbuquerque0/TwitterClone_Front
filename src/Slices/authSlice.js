import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../Services/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  error: false,
  sucess: false,
  loading: false,
};

//Register and login
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const data = await authService.register(user);

    if (data.errors) {
      thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

//logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

//Login
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const data = await authService.login(user);

  if (data.errors) {
    thunkAPI.rejectWithValue(data.erros[0]);
  }

  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.sucess = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.sucess = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.sucess = true;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.sucess = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.sucess = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
