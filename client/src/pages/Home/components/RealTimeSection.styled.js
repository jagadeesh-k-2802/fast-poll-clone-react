import styled from 'styled-components';
import H1 from '../../../components/Typography/H1.styled';
import homeBrowserWindowOne from '../../../assets/home-browser-window-one.png';
import homeShapeOne from '../../../assets/home-shape-1.svg';

const RealTimeSection = () => {
  return (
    <StyledRealTimeSection>
      <Wrapper>
        <H1>Real-time results delivered in a stunning way</H1>
        <p>
          Designed to be pixel perfect and maximise interactions and results.
        </p>
      </Wrapper>

      <BrowserImage>
        <img src={homeBrowserWindowOne} alt="Fast poll results page" />
      </BrowserImage>
    </StyledRealTimeSection>
  );
};

const StyledRealTimeSection = styled.section`
  width: 70%;
  padding: 0 2rem;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 6rem auto;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  padding-left: 3rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  h1 {
    font-size: 5.5rem;
    padding-bottom: 2rem;

    @media screen and (max-width: 600px) {
      font-size: 3.5rem;
      width: 100%;
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
    background-image: url('${homeShapeOne}');
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

export default RealTimeSection;
