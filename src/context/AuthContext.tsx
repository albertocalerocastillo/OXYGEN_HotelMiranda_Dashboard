import React, { createContext, useReducer, useContext, useEffect, useState } from "react";
import {
  User,
  AuthState,
  AuthAction,
  AuthContextProps,
  AuthProviderProps,
} from "./interfaces/AuthInterfaces";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload || null };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");
    const user: User | null = storedUser ? JSON.parse(storedUser) : null;

    if (token && user) {
      dispatch({ type: "LOGIN", payload: user });
    }
    setIsLoading(false);
  }, []);

  const login = (user: User) => {
    localStorage.setItem("authToken", "fakeToken");
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthContext };