import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: #ffffff;
    border-radius: .5rem;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
    max-width: 600px;
    margin: 2rem auto;
`;

export const FormTitle = styled.h2`
    font-family: 'Poppins';
    font-size: 1.5rem;
    color: #135846;
    margin-bottom: 1rem;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
    font-family: 'Poppins';
    font-size: 1rem;
    color: #393939;
    margin-bottom: .5rem;
`;

export const FormInput = styled.input`
    padding: .5rem;
    border: 1px solid #D4D4D4;
    border-radius: .5rem;
    font-family: 'Poppins';
    font-size: 1rem;
    outline: none;
`;

export const FormTextarea = styled.textarea`
    padding: .5rem;
    border: 1px solid #D4D4D4;
    border-radius: .5rem;
    font-family: 'Poppins';
    font-size: 1rem;
    outline: none;
    resize: none;
`;

export const FormStatus = styled.div`
    color: black;
    display: flex;
    gap: 1rem;
`;

export const FormButton = styled.button`
    padding: .75rem 1.5rem;
    cursor: pointer;
    color: #ffffff;
    background: #135846;
    border: none;
    border-radius: .5rem;
    font-family: 'Poppins';
    font-size: 1rem;
    text-align: center;

    &:hover {
        background: #0E4D3A;
    }
`;

export const BackButton = styled.button`
    padding: .75rem 1.5rem;
    cursor: pointer;
    color: #ffffff;
    background: #E23428;
    border: none;
    border-radius: .5rem;
    font-family: 'Poppins';
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;

    &:hover {
        background: #B3211B;
    }
`;