"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUserItem } from "@/types/type";

interface AuthState {
  authUser: AuthUserItem;
}

const loadAuthUserFromLocalStorage = (): AuthUserItem => {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      return JSON.parse(storedUser);
    }
  }
  return {
    id: null,
    userName: "",
    email: "",
    profileImage: "",
    isAuthenticated: false,
  };
};

const initialState: AuthState = {
  authUser: loadAuthUserFromLocalStorage(),
};

const authUserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        id: number;
        email: string;
        userName: string;
        profileImage: string;
      }>
    ) => {
      state.authUser = {
        id: action.payload.id,
        userName: action.payload.userName,
        email: action.payload.email,
        profileImage: action.payload.profileImage,
        isAuthenticated: true,
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("authUser", JSON.stringify(state.authUser));
      }
    },
    clearUser: (state) => {
      state.authUser = {
        id: 0,
        userName: "",
        email: "",
        profileImage: "",
        isAuthenticated: false,
      };

      if (typeof window !== "undefined") {
        localStorage.removeItem("authUser");
      }
    },
  },
});

export const { setUser, clearUser } = authUserSlice.actions;
export default authUserSlice.reducer;
