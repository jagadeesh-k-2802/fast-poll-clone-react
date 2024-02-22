import styled from 'styled-components';
import Container from '../../../components/Container/Container.styled';
import H1 from '../../../components/Typography/H1.styled';
import iconProImages from '../../../assets/icon-pro-images.svg';
import iconProCalendar from '../../../assets/icon-pro-calendar.svg';
import homeIconThree from '../../../assets/home-icon-3.svg';
import proIconDrafts from '../../../assets/icon-pro-draft.svg';
import iconProRemoveAds from '../../../assets/icon-pro-remove-ads.svg';
import iconProPollOptions from '../../../assets/icon-pro-poll-options.svg';

const FeaturesSection = () => {
  return (
    <StyledFeaturesSection>
      <Container>
        <H1>What are the benefits of going Pro?</H1>

        <Grid>
          <GridItem>
            <img src={iconProImages} alt="icon" />
            <h3>Add Images to Polls</h3>
            <p>
              Add images to your polls to give your voters a more interactive
              voting experience.
            </p>
          </GridItem>

          <GridItem>
            <img src={iconProCalendar} alt="icon" />
            <h3>Automatic Closing of Polls</h3>
            <p>
              Pro users can now choose a date and time for a poll to close to
              voting automatically.
            </p>
          </GridItem>

          <GridItem>
            <img src={homeIconThree} alt="icon" />
            <h3>Profile Pro Badge</h3>
            <p>
              Show your support for Fast Poll and proudly display a Pro badge on
              your profile.
            </p>
          </GridItem>

          <GridItem>
            <img src={proIconDrafts} alt="icon" />
            <h3>Save Drats to Publish later</h3>
            <p>
              Pro users can now save a poll as a draft to edit and publish at a
              later date.
            </p>
          </GridItem>

          <GridItem>
            <img src={iconProRemoveAds} alt="icon" />
            <h3>Remove Ads</h3>
            <p>As a Pro member we remove all ads for you.</p>
          </GridItem>

          <GridItem>
            <img src={iconProPollOptions} alt="icon" />
            <h3>More Poll Options</h3>
            <p>
              Pro members can add up to 30 options for a poll instead of the
              standard 15 options.
            </p>
          </GridItem>
        </Grid>
      </Container>
    </StyledFeaturesSection>
  );
};

const StyledFeaturesSection = styled.section`
  h1 {
    padding: 10rem 0;
    font-size: 6rem;

    @media screen and (max-width: 700px) {
      font-size: 3.5rem;
      padding: 5rem 0;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 274px);
  grid-template-rows: repeat(2, 274px);
  gap: 4rem;
  justify-content: space-between;
  margin: 8rem 0;

  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(3, 274px);
    padding: 0 4rem;
    justify-content: center;
  }

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 200px);
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
    margin-bottom: 1.5rem;
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
