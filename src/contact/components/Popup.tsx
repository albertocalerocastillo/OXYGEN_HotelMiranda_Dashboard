import React from 'react';
import { PopupContainer, PopupContent, CloseButton } from './PopupStyles';
import { GiCancel } from 'react-icons/gi';

interface PopupProps {
  content: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ content, onClose }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}><GiCancel size={20} color={"red"} /></CloseButton>
        <p style={{ color: 'black' }}>{content}</p>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;