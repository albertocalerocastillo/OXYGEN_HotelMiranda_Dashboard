export interface User {
    name: string;
    email: string;
}
  
  export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}
  
  export interface AuthAction {
    type: "LOGIN" | "LOGOUT";
    payload?: User;
}
  
  export interface AuthContextProps {
    state: AuthState;
    login: (user: User) => void;
    logout: () => void;
}
  
  export interface AuthProviderProps {
    children: React.ReactNode;
}