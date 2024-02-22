import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Main from './components/Main.styled';
import Flex from '../../components/Flex/Flex.styled';
import PublicPoll from '../../components/Poll/PublicPoll';
import OptionsDropDown from '../../components/OptionsDropDown/OptionsDropDown.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import H1 from '../../components/Typography/H1.styled';
import Container from '../../components/Container/Container.styled';

const PublicPolls = ({ sort, setSort, pollsData, loadMoreRef }) => {
  return (
    <>
      <Helmet>
        <title>Public Polls | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <Container>
          <Flex justifyContent="space-between" gap="2rem" className="polls-header">
            <div>
              <H1>Public Polls</H1>
              <p>Below are the public polls created by Fast Poll members.</p>
            </div>

            <OptionsDropDown
              currentOption={sort}
              options={['recent', 'popular', 'open-to-voting']}
              onChange={setSort}
              bottom="-165px"
              right="0px"
            />
          </Flex>

          {pollsData.isLoading ? null : (
            <>
              {pollsData.data.pages.map((page, i) => (
                <Fragment key={i}>
                  {page.polls.map(poll => (
                    <PublicPoll key={poll._id} poll={poll} />
                  ))}
                </Fragment>
              ))}
            </>
          )}
        </Container>
      </Main>

      <div ref={loadMoreRef} />

      <Footer />
    </>
  );
};

export default PublicPolls;
