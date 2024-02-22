import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Main from './components/Main.styled';
import VotesEmptyScreen from './components/VotesEmptyScreen.styled';
import PollWithVote from '../../components/Poll/PollWithVote';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import H1 from '../../components/Typography/H1.styled';
import Container from '../../components/Container/Container.styled';

const MyVotes = ({ votesData }) => {
  return (
    <>
      <Helmet>
        <title>My Votes | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <Container>
          {votesData.isLoading ? (
            <>
              <PollsHeader />
            </>
          ) : (
            <div>
              {votesData.data.pages[0].votes.length <= 0 ? (
                <VotesEmptyScreen />
              ) : (
                <>
                  <PollsHeader />
                  {votesData.data.pages.map((page, i) => (
                    <Fragment key={i}>
                      {page.votes.map(vote => (
                        <PollWithVote key={vote._id} vote={vote} />
                      ))}
                    </Fragment>
                  ))}
                </>
              )}
            </div>
          )}
        </Container>
      </Main>

      <Footer />
    </>
  );
};

const PollsHeader = () => {
  return (
    <>
      <H1>My Votes</H1>
      <p>Below are the polls you voted on.</p>
    </>
  );
};

export default MyVotes;
