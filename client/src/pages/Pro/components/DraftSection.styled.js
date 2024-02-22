import styled from 'styled-components';
import H1 from '../../../components/Typography/H1.styled';
import proBrowserWindowDrafts from '../../../assets/pro-browser-window-drafts.png';
import homeShapeTwo from '../../../assets/home-shape-2.svg';

const DraftSection = () => {
  return (
    <StyledDraftSection>
      <Wrapper>
        <H1>Save drafts that you can edit and publish when ready</H1>
        <p>
          Create and edit your poll in draft mode until you are ready to share
          it.
        </p>
      </Wrapper>

      <BrowserImage>
        <img src={proBrowserWindowDrafts} alt="List of draft polls" />
      </BrowserImage>
    </StyledDraftSection>
  );
};

const StyledDraftSection = styled.section`
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

export default DraftSection;
