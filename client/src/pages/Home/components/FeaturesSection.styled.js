import styled from 'styled-components';
import Container from '../../../components/Container/Container.styled';
import H1 from '../../../components/Typography/H1.styled';
import homeIconOne from '../../../assets/home-icon-1.svg';
import homeIconTwo from '../../../assets/home-icon-2.svg';
import homeIconThree from '../../../assets/home-icon-3.svg';
import homeIconFour from '../../../assets/home-icon-4.svg';
import homeIconFive from '../../../assets/home-icon-5.svg';
import homeIconSix from '../../../assets/home-icon-6.svg';
import homeIconSeven from '../../../assets/home-icon-7.svg';
import homeIconEight from '../../../assets/home-icon-8.svg';
import homeIconNine from '../../../assets/home-icon-9.svg';

const FeaturesSection = () => {
  return (
    <StyledFeaturesSection>
      <Container>
        <H1>What makes us stand out from the crowd...</H1>

        <Grid>
          <GridItem>
            <img src={homeIconOne} alt="icon" />
            <h3>Stunning Design</h3>
            <p>
              With Fast Poll you can create a stunning looking poll instantly
              and share with the world.
            </p>
          </GridItem>

          <GridItem>
            <img src={homeIconTwo} alt="icon" />
            <h3>Poll Security</h3>
            <p>
              Get clear and accurate poll results with cookie or session
              security checking enabled.
            </p>
          </GridItem>

          <GridItem>
            <img src={homeIconThree} alt="icon" />
            <h3>Fast Poll Profile</h3>
            <p>
              Get yourself a Fast Poll profile where you can save your polls for
              the world to vote on.
            </p>
          </GridItem>

          <GridItem>
            <img src={homeIconFour} alt="icon" />
            <h3>Public Polls</h3>
            <p>
              You can browse all public polls created by Fast Poll members
              instantly.
            </p>
          </GridItem>

          <GridItem>
            <img src={homeIconFive} alt="icon" />
            <h3>Sharing</h3>
            <p>
              Share polls privately or with the world. Sharing a private poll
              will allow anyone you give the url to the ability to vote.
            </p>
          </GridItem>

          <GridItem>
            <img src={homeIconSix} alt="icon" />
            <h3>More Control</h3>
            <p>
              Create an account and get instant access to more features, it’s
              100% free.
            </p>
          </GridItem>

          <GridItem>
            <img src={homeIconSeven} alt="icon" />
            <h3>Poll Comments</h3>
            <p>
              Allow members to comment and discuss a poll in detail with
              threaded comments.
            </p>
          </GridItem>

          <GridItem>
            <img src={homeIconEight} alt="icon" />
            <h3>Close Voting</h3>
            <p>
              Members can open and close voting on a Poll giving you more
              control over voting.
            </p>
          </GridItem>

          <GridItem>
            <img src={homeIconNine} alt="icon" />
            <h3>QR Code Access</h3>
            <p>
              Allowing meetings or large scale events to share a QR code which
              gives access to a poll in one click.
            </p>
          </GridItem>
        </Grid>
      </Container>
    </StyledFeaturesSection>
  );
};

const StyledFeaturesSection = styled.section`
  h1 {
    font-size: 6rem;

    @media screen and (max-width: 700px) {
      font-size: 3.5rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 4rem;
  justify-content: space-between;
  grid-template-columns: repeat(3, 274px);
  grid-template-rows: repeat(3, 274px);
  margin: 8rem 0;

  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(5, 274px);
    padding: 0 4rem;
    justify-content: center;
  }

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(9, 200px);
    padding: 0;
    gap: 1rem;
    justify-content: center;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 38px;
    height: 38px;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.4;
  }
`;

export default FeaturesSection;
