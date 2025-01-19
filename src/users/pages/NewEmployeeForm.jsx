import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
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

const NewEmployeeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, profilePhoto: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.id = `#${Math.floor(Math.random() * 1000000)}`;
    formData.password = CryptoJS.SHA256(formData.password).toString();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
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