import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import CryptoJS from "crypto-js";
import { fetchUserById, updateUser } from '../features/UsersThunks';
import {
    FormContainer,
    FormTitle,
    FormField,
    FormLabel,
    FormInput,
    FormButton,
    FormTextarea,
    FormStatus,
    BackButton
} from "../components/EditEmployeeFormStyles";
import { FormData } from '../interfaces/NewEmployeeFormInterfaces';
import { AppDispatch, RootState } from '../../store/store';
import { User } from '../interfaces/UserInterfaces';

const EditEmployeeForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const user = useSelector((state: RootState) => state.users.user);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        contact: "",
        joinDate: "",
        jobDesk: "",
        status: "ACTIVE",
        password: ""
    });

    useEffect(() => {
        if (id) {
            dispatch(fetchUserById(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                contact: user.contact,
                joinDate: user.joinDate,
                jobDesk: user.jobDesk,
                status: user.status,
                password: "" 
            });
        }
    }, [user]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const hashedPassword = formData.password ? CryptoJS.SHA256(formData.password).toString() : undefined;
        const { ...userDataToSend } = formData;
    
        if (user && user.id) { 
            const updatedUser: User = {
                ...user,
                ...userDataToSend,
                password: hashedPassword || user.password
            };
    
            console.log("Objeto updatedUser a enviar:", updatedUser);
    
            dispatch(updateUser(updatedUser))
                .unwrap()
                .then(() => {
                    navigate("/users");
                })
                .catch((error) => {
                    console.error("Error al actualizar usuario:", error);
                });
        } else {
            console.error("No se puede actualizar el usuario: ID no válido");
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Edit Employee Form</FormTitle>
            <FormField>
                <FormLabel>Full Name</FormLabel>
                <FormInput type="text" name="name" value={formData.name} onChange={handleInputChange} required />
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
                <FormLabel>Password (Dejar en blanco para mantener la actual)</FormLabel>
                <FormInput type="password" name="password" value={formData.password} onChange={handleInputChange} />
            </FormField>
            <FormButton type="submit">Guardar Cambios</FormButton>
            <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
        </FormContainer>
    );
};

export default EditEmployeeForm;