import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import chevronDown from '../../assets/icon-chevron-down.svg';
import logo from '../../assets/logo.png';

export const StyledNavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 2.8rem 1.6rem;
`;

export const StyledNavBarExtended = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 0;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
  background-color: #fff;
`;

export const Left = styled.div`
  a {
    display: inline-block;
    width: 161px;
    height: 36px;
    background-image: url('${logo}');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

    @media screen and (max-width: 600px) {
      background-position: left;
      width: 35px;
      height: 36px;
      background-size: 161px;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 1.6rem;
  color: ${({ theme, primary }) => primary && theme.colors.primary};
  color: ${({ theme, primary }) => !primary && theme.colors.gray};
  letter-spacing: -0.26px;
  padding: 1.6rem;
  display: inline-block;
  margin: 0px 0.4rem;

  &:hover {
    opacity: 0.9;
  }
`;

export const StyledExtendedLink = styled(NavLink)`
  padding: 2rem;
  margin: 0 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 3px solid transparent;
  color: ${({ theme }) => theme.colors.gray};
  transition: ${({ theme }) => `color ${theme.transistion.duration}ms`};

  @media screen and (max-width: 720px) {
    padding: 2rem 1rem;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 2rem 0;
  }

  @media screen and (max-width: 420px) {
    padding: 2rem 0;
    font-size: 1.35rem;
    margin: 0 0.85rem;
  }

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const DropDownWrapper = styled.div`
  position: relative;

  & > button {
    background-color: transparent;
    background-image: url('${chevronDown}');
    background-repeat: no-repeat;
    background-position: top 16px right 7px;
    background-size: 14px;
    padding-right: 4rem;

    img {
      border-radius: 50%;
      height: 38px;
      width: 38px;
    }
  }
`;

export const DropDownHeader = styled.div`
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
`;

export const DropDownBody = styled.div`
  padding: 0 2rem 2rem 2rem;

  a {
    display: inline-block;
    width: 100%;
    padding: 1rem 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const DropDownFooter = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  button {
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.danger};
    font-size: 1.5rem;
    font-weight: 500;
    display: inline-block;
    text-align: left;
    width: 100%;
  }
`;

export const Mid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a.new-btn-link {
    display: none;
  }

  @media screen and (max-width: 850px) {
    a {
      display: none;
    }

    a.new-btn-link {
      display: inline-block;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const RightMobile = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: block;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0;
  }

  button.hamburger {
    position: relative;
    background-color: transparent;
    z-index: 200;

    span,
    span::after,
    span::before {
      content: '';
      display: inline-block;
      width: 32px;
      height: 2px;
      background-color: #333;
      transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
      transform-origin: center;
    }

    span::after {
      position: absolute;
      top: 2px;
      left: 0;
    }

    span::before {
      position: absolute;
      top: 19px;
      left: 0;
    }

    span.active {
      background-color: transparent;

      &::before {
        transform: rotate(-45deg);
        top: 3px;
        left: 2px;
      }

      &::after {
        transform: rotate(45deg);
        top: 3px;
        left: 2px;
      }
    }
  }
`;

export const FullScreenMenu = styled.div`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
  position: fixed;
  background-color: #fff;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5rem;
`;

export const FullScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 50%;
    height: 70px;
    width: 70px;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  a,
  button {
    display: inline-block;
    color: #333;
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: 500;
    background-color: transparent;
    text-align: left;
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

    &:hover {
      opacity: 0.7;
    }
  }
`;
