import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const LoginContent = styled.div`
    background-color: #C5C5C5;
    text-align: center;
    display: flex;
    align-items: center;
`;

export const HeaderImage = styled.img`
    height: 100vh;
    width: 50%;
    object-fit: cover;
    object-position: bottom;
`;

export const LoginContainer = styled.div`
    width: 50%;
`;

export const UserIcon = styled(FaUserCircle)`
    font-size: 50px;
    margin-bottom: 1rem;
`;

export const LoginInfo = styled.div`
    padding: 0.5rem;
    color: red;
    border-radius: 1rem;

    .login {
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        color: #135846;
        filter: brightness(50%);
    }
`;

export const Input = styled.input`
    background-color: ${({ theme }) => theme.contentBg};
    color: ${({ theme }) => theme.text};
    width: 300px;
    padding: 0.5rem;
    border: 2px solid #188669;
    border-radius: 0.5rem;
    z-index: 1;
    display: block;
    margin: 1rem auto 2rem auto;
`;

export const Button = styled.button`
    background-color: #135846;
    color: ${({ theme }) => theme.text};
    box-shadow: 1px 1px 2px black;
    width: 150px;
    border: unset;
    margin-bottom: 2rem;

    &:hover {
        filter: brightness(90%);
    }
`;