import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const StyledNavBarScrolled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 7px 7px 0 rgb(0 0 0 / 3%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 25;
  padding: 1.25rem 2rem;
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export const Left = styled.div`
  a {
    display: inline-block;
    background-image: url('${logo}');
    background-size: 160px;
    background-repeat: no-repeat;
    background-position: left;
    width: 34px;
    height: 34px;
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 1.5rem;
`;
