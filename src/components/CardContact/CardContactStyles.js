import styled from "styled-components";

export const MainCard = styled.div`
  max-width: 400px;
  margin: auto;
  border: 1px solid #ebebeb;
  border-radius: 20px;
  transition: transform 0.3s ease;
  background-color: #ffffff;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const ParagraphContact = styled.div`
  padding: 20px;
  font: normal normal 16px/28px 'Poppins';
  color: #4e4e4e;
  text-align: left;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 20px 20px;
`;

export const ImageContainer = styled.div`
  img {
    width: 56px;
    height: 56px;
    border-radius: 12px;
  }
`;

export const DataUserContainer = styled.div`
  margin-left: 15px;
  flex-grow: 1;
`;

export const DataUserContent = styled.p`
  margin: 0;
  color: #262626;
  font: normal normal 600 16px/25px 'Poppins';
`;

export const DataDescription = styled.p`
  margin-top: 5px;
  color: #799283;
  font: normal normal 14px/21px 'Poppins';
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;
`;