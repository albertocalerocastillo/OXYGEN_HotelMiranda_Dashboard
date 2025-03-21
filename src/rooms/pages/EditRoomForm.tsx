import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomById, updateRoom, fetchRooms } from '../features/RoomsThunks';
import {
    FormContainer,
    FormTitle,
    FormField,
    FormLabel,
    FormInput,
    FormButton,
    FormSelect,
    FormStatus,
    BackButton,
    AmenitiesContainer,
    AmenityLabel,
} from "../components/EditRoomFormStyles";
import { RoomFormData } from '../interfaces/EditRoomInterfaces';
import { AppDispatch, RootState } from '../../store/store';
import { Room } from '../interfaces/RoomInterfaces';
import { toast } from 'react-toastify';

const EditRoomForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const room = useSelector((state: RootState) => state.rooms.room);

    const [formData, setFormData] = useState<RoomFormData>({
        name: "",
        number: "",
        type: "",
        price: "",
        discount: "",
        amenities: [],
        status: "Available",
    });

    const [allAmenities, setAllAmenities] = useState<string[]>([]);

    useEffect(() => {
        if (id) {
            dispatch(fetchRoomById(id));
        }
        setAllAmenities([
            "AC",
            "Shower",
            "Double Bed",
            "Towel",
            "Bathtub",
            "Coffee Set",
            "LED TV",
            "Wifi",
            "Bathtub",
            "Sea View",
            "Single Bed",
            "TV",
        ]);
    }, [dispatch, id]);

    useEffect(() => {
        if (room) {
            setFormData({
                name: room.name,
                number: room.number || "",
                type: room.type,
                price: room.price.toString(),
                discount: room.discount?.toString() || "",
                amenities: Array.isArray(room.amenities) ? room.amenities : [],
                status: room.status,
            });
        }
    }, [room]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAmenityChange = (amenity: string) => {
        const amenities = [...formData.amenities];
        if (amenities.includes(amenity)) {
            setFormData({
                ...formData,
                amenities: amenities.filter((a) => a !== amenity),
            });
        } else {
            setFormData({
                ...formData,
                amenities: [...amenities, amenity],
            });
        }
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (room && room.id) {
            const updatedRoom: Room = {
                ...room,
                ...formData,
                price: parseFloat(formData.price),
                discount: formData.discount ? parseFloat(formData.discount) : undefined,
                amenities: formData.amenities,
            };

            dispatch(updateRoom(updatedRoom))
                .unwrap()
                .then(() => {
                    dispatch(fetchRooms());
                    navigate("/rooms");
                })
                .catch((error) => {
                    console.error("Error al actualizar la habitación:", error);
                    toast.error(`Failed to update room: ${error}`);
                });
        } else {
            console.error("No se puede actualizar la habitación: ID no válido");
        }
    };

    if (!room) {
        return <div>Loading...</div>;
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Edit Room Form</FormTitle>
            <FormField>
                <FormLabel>Room Name</FormLabel>
                <FormInput type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Room Number</FormLabel>
                <FormInput type="text" name="number" value={formData.number} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Room Type</FormLabel>
                <FormSelect name="type" value={formData.type} onChange={handleInputChange} required>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                    <option value="Deluxe">Deluxe</option>
                </FormSelect>
            </FormField>
            <FormField>
                <FormLabel>Price</FormLabel>
                <FormInput type="number" name="price" value={formData.price} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Discount</FormLabel>
                <FormInput type="number" name="discount" value={formData.discount} onChange={handleInputChange} />
            </FormField>
            <FormField>
                <FormLabel>Amenities</FormLabel>
                <AmenitiesContainer>
                    {allAmenities.map((amenity) => (
                        <AmenityLabel key={amenity}>
                            <input
                                type="checkbox"
                                value={amenity}
                                checked={formData.amenities.includes(amenity)}
                                onChange={() => handleAmenityChange(amenity)}
                            />
                            {amenity}
                        </AmenityLabel>
                    ))}
                </AmenitiesContainer>
            </FormField>
            <FormField>
                <FormLabel>Status</FormLabel>
                <FormStatus>
                    <label>
                        <input type="radio" name="status" value="Available" checked={formData.status === "Available"} onChange={handleInputChange} />
                        Available
                    </label>
                    <label>
                        <input type="radio" name="status" value="Booked" checked={formData.status === "Booked"} onChange={handleInputChange} />
                        Booked
                    </label>
                </FormStatus>
            </FormField>
            <FormButton type="submit">Guardar Cambios</FormButton>
            <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
        </FormContainer>
    );
};

export default EditRoomForm;