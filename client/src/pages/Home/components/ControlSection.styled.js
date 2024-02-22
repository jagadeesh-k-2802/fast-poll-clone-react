import styled from 'styled-components';
import H1 from '../../../components/Typography/H1.styled';
import homeBrowserWindowTwo from '../../../assets/home-browser-window-two.png';
import homeShapeTwo from '../../../assets/home-shape-2.svg';

const ControlSection = () => {
  return (
    <StyledControlSection>
      <Wrapper>
        <H1>More flexibility & control over your polls</H1>
        <p>
          Create an account to gain access to more advanced control for your
          polls.
        </p>
      </Wrapper>

      <BrowserImage>
        <img src={homeBrowserWindowTwo} alt="Fast Poll user dashboard" />
      </BrowserImage>
    </StyledControlSection>
  );
};

const StyledControlSection = styled.section`
  width: 70%;
  padding: 0 2rem;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 20rem auto;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  padding-left: 3rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 700px) {
    width: 100%;
  }

  h1 {
    font-size: 5.5rem;
    padding-bottom: 2rem;

    @media screen and (max-width: 600px) {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1.8rem;
  }
`;

const BrowserImage = styled.div`
  position: relative;

  img {
    z-index: 5;
    position: relative;

    @media screen and (max-width: 700px) {
      min-width: 600px;
    }
  }

  &::after {
    background-image: url('${homeShapeTwo}');
    background-repeat: no-repeat;
    background-size: 840px;
    position: absolute;
    width: 840px;
    height: 840px;
    top: -170px;
    right: -40%;
    z-index: 1;
    content: '';

    @media screen and (max-width: 700px) {
      background-size: 600px;
      width: 560px;
      height: 650px;
      top: -70px;
      right: -20%;
    }
  }
`;

export default ControlSection;
