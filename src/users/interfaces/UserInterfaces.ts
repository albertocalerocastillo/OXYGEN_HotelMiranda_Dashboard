export interface User {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  joinDate: string;
  jobDesk: string;
  contact: string;
  status: 'ACTIVE' | 'INACTIVE';
  password?: string;
}

export interface UsersState {
  users: User[];
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}