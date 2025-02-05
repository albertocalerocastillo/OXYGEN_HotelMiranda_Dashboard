export interface Contact {
    id: string;
    date: string;
    customer: string;
    email: string;
    phone: string;
    subject: string;
    comment: string;
    archived: boolean;
  }
  
  export interface ContactsState {
    contacts: Contact[];
    contact: Contact | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}  