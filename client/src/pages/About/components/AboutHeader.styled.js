import styled from 'styled-components';
import homeShape4 from '../../../assets/home-shape-4.svg';

export const AboutHeader = styled.div`
  background-color: #f9f7ff;
  text-align: center;
  padding: 10rem 0;
  margin-bottom: 10rem;

  &::after {
    content: '';
    background-image: url('${homeShape4}');
    background-repeat: no-repeat;
    background-size: 790px;
    position: absolute;
    width: 790px;
    height: 790px;
    top: 190px;
    right: -50px;
    z-index: 1;

    @media screen and (max-width: 720px) {
      top: 300px;
      background-size: 430px;
      right: -530px;
      height: 450px;
    }
  }
`;

export const AboutHeaderText = styled.div`
  position: relative;
  z-index: 8;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.lightPurple};
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 5.5rem;
    color: #222831;
    max-width: 600px;

    @media screen and (max-width: 720px) {
      font-size: 3.2rem;
    }
  }
`;
