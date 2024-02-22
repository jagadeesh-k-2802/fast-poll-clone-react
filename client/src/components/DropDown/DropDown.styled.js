import { useRef, useCallback } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const DropDown = ({
  visible,
  onHide,
  width,
  margin,
  top,
  right,
  bottom,
  left,
  children
}) => {
  const dropDownRef = useRef();
  useOnClickOutside(dropDownRef, useCallback(onHide, [onHide]));

  return (
    <StyledDropDown
      className="dropdown"
      ref={dropDownRef}
      visible={visible}
      width={width}
      margin={margin}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      children={children}
    />
  );
};

const StyledDropDown = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  width: ${({ width }) => width ?? '220px'};
  margin: ${({ margin }) => margin};
  z-index: 15;
  background: #fff;
  box-shadow: 0 4px 21px 0 rgb(49 49 49 / 20%);
  border-radius: 5px;
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
  transition-timing-function: cubic-bezier(5.215, 1, 2, 1);
  transform: ${({ visible }) => (visible ? 'scale(1)' : 'scale(0)')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export default DropDown;
