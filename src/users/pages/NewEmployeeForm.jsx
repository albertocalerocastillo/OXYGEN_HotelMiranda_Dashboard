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
  FormTextarea,
  FormButton,
  FormStatus,
  FormPhotoInput,
  BackButton
} from "../components/NewEmployeeFormStyles";

const NewEmployeeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    photo: "",
    name: "",
    position: "Manager",
    email: "",
    phone: "",
    startDate: "",
    description: "",
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
      setFormData({ ...formData, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    formData.id = `#${Math.floor(Math.random() * 1000000)}`;

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(formData);
    localStorage.setItem('employees', JSON.stringify(employees));

    navigate("/users");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>New Employee Form</FormTitle>
      <FormField>
        <FormLabel>Photo</FormLabel>
        <FormPhotoInput type="file" name="photo" onChange={handlePhotoChange} />
      </FormField>
      <FormField>
        <FormLabel>Nombre completo</FormLabel>
        <FormInput type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Puesto</FormLabel>
        <FormSelect name="position" value={formData.position} onChange={handleInputChange}>
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
        <FormInput type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Start Date</FormLabel>
        <FormInput type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Descripción de funciones</FormLabel>
        <FormTextarea name="description" value={formData.description} onChange={handleInputChange} required />
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