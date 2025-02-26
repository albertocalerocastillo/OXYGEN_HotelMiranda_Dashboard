export interface Booking {
    id: string;
    guest: string;
    orderDate: string;
    checkInDate: string;
    checkInTime: string;
    checkOutDate: string;
    checkOutTime: string;
    status: string;
    specialRequest: string;
    specialRequestType: string;
    roomType: string;
    roomNumber?: string;
    price?: string;
    description?: string;
  }
    
  export interface BookingsState {
    bookings: Booking[];
    booking: Booking | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}