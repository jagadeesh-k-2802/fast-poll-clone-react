import styled from 'styled-components';
import H1 from '../../../components/Typography/H1.styled';
import proBrowserWindow from '../../../assets/pro-browser-window.png';
import homeShapeTwo from '../../../assets/home-shape-2.svg';

const ImagePollsSection = () => {
  return (
    <StyledImagePollsSection>
      <Wrapper>
        <H1>Make polls come alive by adding stunning images</H1>
        <p>Share more detail and options with high resolution images.</p>
      </Wrapper>

      <BrowserImage>
        <img src={proBrowserWindow} alt="Poll with stunning images" />
      </BrowserImage>
    </StyledImagePollsSection>
  );
};

const StyledImagePollsSection = styled.section`
  width: 70%;
  padding: 10rem 2rem;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 10rem auto;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  padding-left: 3rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 0;
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

    @media screen and (max-width: 600px) {
      min-width: 640px;
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

export default ImagePollsSection;
