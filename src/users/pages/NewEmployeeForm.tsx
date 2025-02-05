import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import CryptoJS from "crypto-js";
import { createUser } from '../features/UsersThunks';
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
  FormPhotoInput,
  FormStatus,
  BackButton
} from "../components/NewEmployeeFormStyles";
import { FormData } from '../interfaces/NewEmployeeFormInterfaces';
import { AppDispatch } from '../../store/store';
import { User } from '../interfaces/UserInterfaces';

const NewEmployeeForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [formData, setFormData] = useState<Omit<FormData, 'id'>>({
    profilePhoto: "",
    name: "",
    job: "Manager",
    email: "",
    contact: "",
    joinDate: "",
    jobDesk: "",
    status: "ACTIVE",
    password: ""
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePhoto: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newUser: User = {
      ...formData,
      id: Math.floor(Math.random() * 1000000),
      password: CryptoJS.SHA256(formData.password).toString()
    };
    dispatch(createUser(newUser));
    navigate("/users");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>New Employee Form</FormTitle>
      <FormField>
        <FormLabel>Photo</FormLabel>
        <FormPhotoInput type="file" name="profilePhoto" onChange={handlePhotoChange} />
      </FormField>
      <FormField>
        <FormLabel>Full Name</FormLabel>
        <FormInput type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Job Position</FormLabel>
        <FormSelect name="job" value={formData.job} onChange={handleInputChange}>
          <FormOption value="Manager">Manager</FormOption>
          <FormOption value="Recepción">Recepción</FormOption>
          <FormOption value="Servicio de Habitaciones">Servicio de Habitaciones</FormOption>
        </FormSelect>
      </FormField>
      <FormField>
        <FormLabel>Email</FormLabel>
        <FormInput type="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Número de teléfono</FormLabel>
        <FormInput type="text" name="contact" value={formData.contact} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Start Date</FormLabel>
        <FormInput type="date" name="joinDate" value={formData.joinDate} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Descripción de funciones</FormLabel>
        <FormTextarea name="jobDesk" value={formData.jobDesk} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Estado</FormLabel>
        <FormStatus>
          <label>
            <input type="radio" name="status" value="ACTIVE" checked={formData.status === "ACTIVE"} onChange={handleInputChange} />
            Activo
          </label>
          <label>
            <input type="radio" name="status" value="INACTIVE" checked={formData.status === "INACTIVE"} onChange={handleInputChange} />
            Inactivo
          </label>
        </FormStatus>
      </FormField>
      <FormField>
        <FormLabel>Password</FormLabel>
        <FormInput type="password" name="password" value={formData.password} onChange={handleInputChange} required />
      </FormField>
      <FormButton type="submit">Guardar</FormButton>
      <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
    </FormContainer>
  );
};

export default NewEmployeeForm;