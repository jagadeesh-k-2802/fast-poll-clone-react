import styled from 'styled-components';
import H1 from '../../../components/Typography/H1.styled';
import homeDevice from '../../../assets/home-device.png';
import homeShape3 from '../../../assets/home-shape-3.svg';

const SharingSection = () => {
  return (
    <StyledSharingSection>
      <Left>
        <H1>Ideal for easily sharing at events</H1>
        <p>
          Just share the QR code in the presentation and allow everyone in the
          room to access and vote on a poll in just a few taps.
        </p>
      </Left>

      <Right>
        <img
          src={homeDevice}
          alt="A mobile device showing our QR code feature"
        />
      </Right>
    </StyledSharingSection>
  );
};

const StyledSharingSection = styled.section`
  margin: 6rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 2rem 7rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    padding: 2rem;
    margin: 25rem 0;
    gap: 7rem;
  }
`;

const Left = styled.div`
  width: 40%;

  @media screen and (max-width: 850px) {
    width: 100%;
  }

  h1 {
    font-size: 6rem;

    @media screen and (max-width: 600px) {
      font-size: 4rem;
    }
  }

  p {
    font-size: 2rem;
    line-height: 1.3;
  }
`;

const Right = styled.div`
  position: relative;
  padding-right: 15rem;

  @media screen and (max-width: 800px) {
    padding-right: 0;
  }

  &::after {
    background-image: url('${homeShape3}');
    background-repeat: no-repeat;
    background-size: 840px;
    position: absolute;
    width: 840px;
    height: 840px;
    top: -70px;
    left: -50px;
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

  img {
    max-width: 540px;
    position: relative;
    z-index: 5;

    @media screen and (max-width: 600px) {
      max-width: 90%;
    }
  }
`;

export default SharingSection;
