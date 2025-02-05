export interface FormData {
    id: number;
    profilePhoto: string;
    name: string;
    job: string;
    email: string;
    contact: string;
    joinDate: string;
    jobDesk: string;
    status: 'ACTIVE' | 'INACTIVE';
    password: string;
}  