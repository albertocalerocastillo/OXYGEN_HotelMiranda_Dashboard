import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    PageContainer,
    TitleBlock,
    FormBlock,
    Form,
    Label,
    Input,
    Button,
    MasterCredentialsBlock,
    Title,
} from "../components/LoginStyles";
import { Credentials } from '../interfaces/LoginInterfaces';

const Login: React.FC = () => {
    const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = credentials;

        try {
            const response = await fetch(`http://localhost:3001/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Error al iniciar sesión: ${errorData.message}`);
                return;
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            login({ email, name: data.name });
            alert("Login exitoso");
            navigate("/dashboard");
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert("Error al iniciar sesión. Inténtalo de nuevo.");
        }
    };

    return (
        <PageContainer>
            <TitleBlock>
                <Title>Login</Title>
            </TitleBlock>

            <FormBlock>
                <Form onSubmit={handleSubmit}>
                    <Label>
                        Email:
                        <Input
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            placeholder="Introduce tu email"
                            required
                            data-cy="emailInput"
                        />
                    </Label>
                    <Label>
                        Contraseña:
                        <Input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Introduce tu contraseña"
                            required
                            data-cy="passwordInput"
                        />
                    </Label>
                    <Button type="submit" data-cy="submitButton">Entrar</Button>
                </Form>
            </FormBlock>
            <MasterCredentialsBlock>
                <p>
                    <strong>Credenciales para acceder:</strong>
                </p>
                <p>
                    <strong>Email:</strong> alberto@gmail.com
                </p>
                <p>
                    <strong>Contraseña:</strong> alberto1234
                </p>
            </MasterCredentialsBlock>
        </PageContainer>
    );
};

export default Login;