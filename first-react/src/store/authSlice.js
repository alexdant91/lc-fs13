import { createSlice } from "@reduxjs/toolkit";
import { get, save, remove } from "../utility/internalMemory";

const authSlice = () => {
  const token = get("token") || null;
  const user = get("user") || null;

  return createSlice({
    name: "auth",
    initialState: {
      token,
      user,
    },
    reducers: {
      login: (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;

        save("token", action.payload.token);
        save("user", action.payload.user);
      },
      logout: (state) => {
        state.token = null;
        state.user = null;

        remove("token");
        remove("user");
      },
    },
  });
};

export const { login, logout } = authSlice().actions;

export default authSlice().reducer;
