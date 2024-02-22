import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(117, 120, 137, 0.3);
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  padding: 0 2rem;
`;

export default Backdrop;
