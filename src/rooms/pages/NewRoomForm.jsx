import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const NewRoomForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    photo: "",
    roomNumber: "",
    roomName: "",
    roomType: "Double Bed",
    amenities: "",
    price: "",
    offerPrice: "",
    status: "Available"
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.id = `#${Math.floor(Math.random() * 1000000)}`;
    const rooms = JSON.parse(localStorage.getItem('rooms')) || [];
    rooms.push(formData);
    localStorage.setItem('rooms', JSON.stringify(rooms));
    navigate("/rooms");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>New Room Form</FormTitle>
      <FormField>
        <FormLabel>Photo</FormLabel>
        <FormPhotoInput type="file" name="photo" onChange={handlePhotoChange} />
      </FormField>
      <FormField>
        <FormLabel>Room Type</FormLabel>
        <FormSelect name="roomType" value={formData.roomType} onChange={handleInputChange}>
          <FormOption value="Single Bed">Single Bed</FormOption>
          <FormOption value="Double Bed">Double Bed</FormOption>
          <FormOption value="Double Superior">Double Superior</FormOption>
          <FormOption value="Suite">Suite</FormOption>
        </FormSelect>
      </FormField>
      <FormField>
        <FormLabel>Room Number</FormLabel>
        <FormInput type="text" name="roomNumber" value={formData.roomNumber} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Description</FormLabel>
        <FormTextarea name="amenities" value={formData.amenities} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Offer</FormLabel>
        <FormStatus>
          <label>
            <input type="radio" />
            YES
          </label>
          <label>
            <input type="radio" />
            NO
          </label>
        </FormStatus>      
        </FormField>
      <FormField>
        <FormLabel>Price</FormLabel>
        <FormInput type="text" name="price" value={formData.price} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Discount</FormLabel>
        <FormInput type="text" name="offerPrice" value={formData.offerPrice} onChange={handleInputChange} required />
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
      <FormButton type="submit">Guardar</FormButton>
      <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
    </FormContainer>
  );
};

export default NewRoomForm;