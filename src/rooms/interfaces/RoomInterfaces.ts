export interface Room {
  id: string;
  name: string;
  type: string;
  number?: string;
  amenities: string[];
  price: number;
  discount?: number;
  offerPrice?: string;
  photos: string[];
  status: string;
  description?: string;
  offer?: string;
  cancellation?: string;
}

export interface RoomsState {
  rooms: Room[];
  room: Room | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}