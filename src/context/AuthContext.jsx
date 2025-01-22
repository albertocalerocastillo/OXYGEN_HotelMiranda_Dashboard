import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  isAuthenticated: false,
  user: {
    name: "",
    email: "",
  },
};

const ACTIONS = {
  LOGIN: "login",
  LOGOUT: "logout",
  UPDATE_USER: "updateUser",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case ACTIONS.LOGOUT:
      return {
        isAuthenticated: false,
        user: { name: "", email: "" },
      };
    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, (initial) => {
    const storedState = localStorage.getItem("authState");
    return storedState ? JSON.parse(storedState) : initial;
  });

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};