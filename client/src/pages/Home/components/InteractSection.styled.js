import styled from 'styled-components';
import H1 from '../../../components/Typography/H1.styled';
import homeCommunityLogos from '../../../assets/home-community-logos.jpg';

const InteractSection = () => {
  return (
    <StyledInteractSection>
      <Left>
        <H1>Interact with your audience in an instant</H1>
        <p>
          Create a poll and you will immediately be given a url to your poll.
          Share the url with anyone and gather votes in seconds.
        </p>
      </Left>

      <Right>
        <img
          src={homeCommunityLogos}
          alt="Online community logos for Facebook Gaming, Twitter, YouTube and Twitch"
        />
      </Right>
    </StyledInteractSection>
  );
};

const StyledInteractSection = styled.section`
  margin: 7rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 2rem 7rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    padding: 2rem;
    margin: 25rem 0;
    gap: 5rem;
  }
`;

const Left = styled.div`
  width: 60%;

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
  text-align: right;

  img {
    width: 90%;

    @media screen and (max-width: 700px) {
      width: 130%;
    }
  }
`;

export default InteractSection;
