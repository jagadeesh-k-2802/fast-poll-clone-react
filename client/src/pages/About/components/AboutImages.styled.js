import styled from 'styled-components';

const AboutImages = styled.div`
  padding: 5rem 0;
  z-index: 5;
  position: relative;

  img {
    background: #fff;
    box-shadow: 0 20px 24px 10px rgb(138 138 138 / 22%);
    border-radius: 5px;

    &:first-child {
      max-width: 930px;
      width: 91%;
    }

    &:last-child {
      max-width: 485px;
      width: 48%;
      margin-top: -47%;
      float: right;
      z-index: 5;
      position: relative;
    }
  }
`;

export default AboutImages;
