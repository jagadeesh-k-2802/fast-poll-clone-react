import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop.styled';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import closeIcon from '../../assets/icon-close-modal.svg';

const Modal = ({ visible, onHide, showClose, children }) => {
  const modalRef = useRef();
  useOnClickOutside(modalRef, useCallback(onHide, [onHide]));

  return (
    <Backdrop visible={visible}>
      <StyledModal ref={modalRef}>
        {showClose && <CloseButton onClick={onHide} />}
        {children}
      </StyledModal>
    </Backdrop>
  );
};

const StyledModal = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: '500px';
  z-index: 20;
  position: relative;
  cursor: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-image: url('${closeIcon}');
  height: 16px;
  width: 16px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: transparent;

  &:hover {
    opacity: 0.8;
  }
`;

export default Modal;
