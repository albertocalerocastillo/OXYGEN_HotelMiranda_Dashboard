import { styled } from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    width: 100%;
    height: 100px;
    box-shadow: 0px 3px 10px #00000005;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    z-index: 99;
    padding-left: 20px;
    top: 0;
`;

export const NavItemContainer = styled.div`
    padding-right: 5%;
    font-size: 24px;
    color: #262626;
    display: flex;
    flex-direction: row;
    font-family: "Poppins";
    align-items: center;
    gap: 4.5rem;
    justify-content: flex-end;

    svg:hover {
    transform: scale(1.5);
    transition: transform 0.3s ease;
    cursor: pointer;
    }

    h2 {
    font-size: 28px;
    }
`;