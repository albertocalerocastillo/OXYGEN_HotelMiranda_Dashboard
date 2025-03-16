import React, { useState, useContext, useRef, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import {
    LoginContent,
    HeaderImage,
    LoginContainer,
    UserIcon,
    LoginInfo,
    Input,
    Button,
} from "../components/LoginStyles";
import hotel from "../../assets/login.jpg";
import { Credentials } from '../interfaces/LoginInterfaces';

const Login: React.FC = () => {
    const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" });
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isLogingIn, setIsLogingIn] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLogingIn(true);
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
                return setIsLogingIn(false);
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

        setIsLogingIn(false);
    };

    return (
        <>
            <LoginContent>
                <HeaderImage src={hotel} alt="imagen header del panel del hotel" />

                <LoginContainer>
                    <UserIcon />

                    <LoginInfo>
                        <div className="login">
                            (
                            <small>alberto@gmail.com</small>|
                            <small>alberto1234</small>
                            )
                        </div>
                    </LoginInfo>

                    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
                        <Input type="email" name="email" placeholder="Insert username" value={credentials.email} onChange={handleChange} />
                        <Input type="password" name="password" placeholder="Insert password" value={credentials.password} onChange={handleChange} />
                        <Button type="submit" disabled={isLogingIn}>
                            {isLogingIn ? "Logging in..." : "Login"}
                        </Button>
                    </form>
                </LoginContainer>
            </LoginContent>
        </>
    );
};

export default Login;