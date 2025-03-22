import styled, { css } from "styled-components";

interface ReviewsMenuItemProps {
    active: boolean;
}

export const ReviewsStyled = styled.div`
    display: flex;
    flex-direction: column;

    table {
        color: black;
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 12px 15px;
        text-align: left;
    }

    th {
        background-color: #0E4D3A;
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.9rem;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tr:hover {
        background-color: #f0f0f0;
    }

    td {
        font-size: 0.9rem;
    }
`;

export const ReviewsMenuStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #D4D4D4;
    margin-bottom: 1rem;
    padding: .5rem 2%;
`;

export const ReviewsMenuTextStyled = styled.div`
    display: flex;
    gap: 2rem;
`;

export const ReviewsMenuItemStyled = styled.p<ReviewsMenuItemProps>`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1rem;
    color: ${props => (props.active ? "#135846" : "#6E6E6E")};
    padding-right: 1rem;
    cursor: pointer;
    border-bottom: ${props => (props.active ? "solid 2px #135846" : "none")};
    margin-bottom: ${props => (props.active ? "-0.5rem" : "0")};
`;

export const ReviewsButtonStyled = styled.button`
    padding: .5rem 1rem;
    cursor: pointer;
    color: #ffffff;
    background: #135846;
    border: none;
    border-radius: .5rem;
    text-align: center;

    &:hover {
        background: #0E4D3A;
    }
`;