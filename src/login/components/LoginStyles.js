import styled from "styled-components";

export const PageContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f4f8;
  padding: 2rem;
  box-sizing: border-box;
`;

export const TitleBlock = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #135846;
`;

export const FormBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 1.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  color: white;
  background-color: #135846;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d3c32;
  }
`;

export const MasterCredentialsBlock = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
`;