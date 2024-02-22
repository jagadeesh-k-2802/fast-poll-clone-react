import styled from 'styled-components';
import homeBackgroundShape from '../../../assets/home-background-shape.svg';

const ErrorWrapper = styled.div`
  &::after {
    background-image: url('${homeBackgroundShape}');
    background-repeat: no-repeat;
    background-position: right -10% center;
    background-size: contain;
    position: absolute;
    width: 500px;
    height: 500px;
    top: 22%;
    left: 75%;
    content: '';
    z-index: 1;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 7.4rem;
    line-height: 1.1;
  }

  a {
    padding: 2rem 4rem;
    font-size: 2.25rem;
    margin: 1rem 0;
  }
`;

export default ErrorWrapper;
