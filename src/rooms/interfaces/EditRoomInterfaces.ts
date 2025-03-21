export interface RoomFormData {
    name: string;
    number: string;
    type: string;
    price: string;
    discount: string | undefined;
    amenities: string[];
    status: string;
}