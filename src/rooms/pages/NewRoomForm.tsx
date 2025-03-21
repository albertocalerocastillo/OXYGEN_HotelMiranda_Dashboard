import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { createRoom } from '../features/RoomsThunks';
import {
    FormContainer,
    FormTitle,
    FormField,
    FormLabel,
    FormInput,
    FormSelect,
    FormOption,
    FormButton,
    FormTextarea,
    FormStatus,
    BackButton,
    AmenitiesContainer,
    AmenityLabel
} from "../components/NewRoomFormStyles";
import { AppDispatch } from '../../store/store';
import { Room } from '../interfaces/RoomInterfaces';
import { v4 as uuidv4 } from 'uuid';

const NewRoomForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const [formData, setFormData] = useState<Omit<Room, 'id' | 'photos'>>({
        number: "",
        name: "",
        type: "Double Bed",
        description: "",
        offer: "NO",
        price: 0,
        discount: 0,
        offerPrice: "",
        cancellation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        amenities: [],
        status: "Available"
    });

    const availableAmenities = [
        "AC", "Shower", "Double Bed", "Towel", "Bathup", "Coffee Set", "LED TV", "Wifi",
        "Bathtub", "Sea View", "Single Bed", "TV"
    ];

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = event.target;
        const checked = (event.target as HTMLInputElement).type === "checkbox" ? (event.target as HTMLInputElement).checked : false;

        if (name === "amenities" && type === "checkbox") {
            const updatedAmenities = checked
                ? [...formData.amenities, value]
                : formData.amenities.filter(amenity => amenity !== value);
            setFormData({ ...formData, amenities: updatedAmenities });
        } else {
            setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
        }

        if (name === "price" || name === "discount") {
            const newOfferPrice = calculateOfferPrice(Number(formData.price), Number(formData.discount));
            setFormData({ ...formData, offerPrice: newOfferPrice, [name]: value });
        }
    };

    const calculateOfferPrice = (price: number, discount: number) => {
        if (isNaN(price) || isNaN(discount)) {
            return "";
        }
        const offerPriceValue = price - (price * (discount / 100));
        return offerPriceValue.toFixed(2);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const offerString = formData.offer === "YES" ? "YES" : "NO";
        const id = uuidv4();
        const roomData = { ...formData, offer: offerString, id, photos: [] };
        dispatch(createRoom(roomData));
        navigate("/rooms");
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>New Room Form</FormTitle>
            <FormField>
                <FormLabel>Room Name</FormLabel>
                <FormInput type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Room Type</FormLabel>
                <FormSelect name="type" value={formData.type} onChange={handleInputChange}>
                    <FormOption value="Single Bed">Single Bed</FormOption>
                    <FormOption value="Double Bed">Double Bed</FormOption>
                    <FormOption value="Double Superior">Double Superior</FormOption>
                    <FormOption value="Suite">Suite</FormOption>
                </FormSelect>
            </FormField>
            <FormField>
                <FormLabel>Room Number</FormLabel>
                <FormInput type="text" name="number" value={formData.number} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Description</FormLabel>
                <FormTextarea name="description" value={formData.description} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Offer</FormLabel>
                <FormStatus>
                    <label>
                        <input type="radio" name="offer" value="YES" checked={formData.offer === "YES"} onChange={handleInputChange} />
                        YES
                    </label>
                    <label>
                        <input type="radio" name="offer" value="NO" checked={formData.offer === "NO"} onChange={handleInputChange} />
                        NO
                    </label>
                </FormStatus>
            </FormField>
            {formData.offer === "YES" && (
                <FormField>
                    <FormLabel>Discount (%)</FormLabel>
                    <FormInput type="text" name="discount" value={formData.discount} onChange={handleInputChange} required />
                </FormField>
            )}
            <FormField>
                <FormLabel>Price</FormLabel>
                <FormInput type="text" name="price" value={formData.price} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Cancellation Policy</FormLabel>
                <FormTextarea name="cancellation" value={formData.cancellation} readOnly />
            </FormField>
            <FormField>
                <FormLabel>Amenities</FormLabel>
                <AmenitiesContainer>
                    {availableAmenities.map(amenity => (
                        <AmenityLabel key={amenity}>
                            <input
                                type="checkbox"
                                name="amenities"
                                value={amenity}
                                checked={formData.amenities.includes(amenity)}
                                onChange={handleInputChange}
                            />
                            {amenity}
                        </AmenityLabel>
                    ))}
                </AmenitiesContainer>
            </FormField>
            <FormButton type="submit">Guardar</FormButton>
            <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
        </FormContainer>
    );
};

export default NewRoomForm;