import styled from 'styled-components';
import homeShape2 from '../../assets/home-shape-2.svg';

// Shape background used for login, sign-up, contact and password-reset pages

const FormShape = styled.div`
  width: 400px;
  height: 92vh;
  min-height: 580px;
  max-height: 650px;

  &::after {
    background-image: url('${homeShape2}');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    width: 840px;
    height: 840px;
    top: 28px;
    left: 55%;
    z-index: 1;
    content: '';
  }
`;

export default FormShape;
