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
  FormPhotoInput,
  BackButton
} from "../components/NewRoomFormStyles";
import { AppDispatch } from '../../store/store';
import { Room } from '../interfaces/RoomInterfaces';

const NewRoomForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [formData, setFormData] = useState<Room>({
    id: "",
    photos: [],
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "price" || name === "discount") {
      const newOfferPrice = calculateOfferPrice(Number(formData.price), Number(formData.discount));
      setFormData({ ...formData, offerPrice: newOfferPrice, [name]: value });
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length < 3 || files.length > 5) {
      alert("Please select between 3 and 5 photos.");
      return;
    }
    const photos: string[] = [];
    files.forEach(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        photos.push(reader.result as string);
        setFormData(prevState => ({
          ...prevState,
          photos
        }));
      };
    });
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
    const roomId = `#${Math.floor(Math.random() * 1000000)}`;
    const roomData = { ...formData, id: roomId };
    dispatch(createRoom(roomData));
    navigate("/rooms");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>New Room Form</FormTitle>
      <FormField>
        <FormLabel>Photos (3-5)</FormLabel>
        <FormPhotoInput type="file" name="photos" onChange={handlePhotoChange} multiple />
      </FormField>
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
        <FormSelect name="amenities" value={formData.amenities.join(', ')} onChange={handleInputChange}>
          <FormOption value="AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</FormOption>
          <FormOption value="Bathtub, Sea View, WiFi, Coffee Set">Bathtub, Sea View, WiFi, Coffee Set</FormOption>
          <FormOption value="Shower, Single Bed, Towel, TV, Wifi">Shower, Single Bed, Towel, TV, Wifi</FormOption>
          <FormOption value="Shower, Double Bed, Towel, TV, Wifi">Shower, Double Bed, Towel, TV, Wifi</FormOption>
        </FormSelect>
      </FormField>
      <FormButton type="submit">Guardar</FormButton>
      <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
    </FormContainer>
  );
};

export default NewRoomForm;