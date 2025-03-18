export interface FormData {
    name: string;
    email: string;
    contact: string;
    joinDate: string;
    jobDesk: string;
    status: 'ACTIVE' | 'INACTIVE';
    password: string;
    // profilePhoto?: string; // Ya no es necesario aquí para el envío
}