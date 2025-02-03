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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const MASTER_EMAIL = "alberto@gmail.com";
  const MASTER_PASSWORD = "alberto1234";

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === MASTER_EMAIL && password === MASTER_PASSWORD) {
      login({ name: "Alberto", email: MASTER_EMAIL });
      alert("Login exitoso");
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introduce tu email"
              required
              data-cy="emailInput"
            />
          </Label>
          <Label>
            Contraseña:
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <strong>Email:</strong> {MASTER_EMAIL}
        </p>
        <p>
          <strong>Contraseña:</strong> {MASTER_PASSWORD}
        </p>
      </MasterCredentialsBlock>
    </PageContainer>
  );
};

export default Login;