import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  padding: 6rem;
  background-color: #fff;

  @media screen and (max-width: 730px) {
    padding: 4rem 0;

    .footer-wrapper {
      flex-direction: column;
      align-items: flex-start;
      gap: 5rem;
    }
  }
`;

export const Left = styled.div`
  img {
    height: 32px;
    width: 32px;
  }

  p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.lightGray};
    margin-top: 3rem;
  }
`;

export const Right = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 7rem;

  @media screen and (max-width: 730px) {
    margin-top: 3.5rem;
  }

  a {
    margin-right: 1rem;
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #555;
  font-weight: 700;
  margin-bottom: 1.4rem;
`;

export const StyledLink = styled(Link)`
  font-size: 1.4rem;
  display: block;
  color: #b1b1b1;
  font-weight: 400;
  margin-bottom: 16px;
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterColumn = styled.div`
  margin: 0 2.2rem;

  @media screen and (max-width: 730px) {
    margin: 0 3rem 0 0;
  }

  @media screen and (max-width: 600px) {
    width: 40%;
    margin: 0;
  }
`;
