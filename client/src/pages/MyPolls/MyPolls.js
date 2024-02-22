import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Main from './components/Main.styled';
import PrivatePoll from '../../components/Poll/PrivatePollContainer';
import PollsEmptyScreen from '../../components/Poll/PollsEmptyScreen.styled';
import OptionsDropDown from '../../components/OptionsDropDown/OptionsDropDown.styled';
import Flex from '../../components/Flex/Flex.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import H1 from '../../components/Typography/H1.styled';
import Container from '../../components/Container/Container.styled';

const MyPolls = ({ sort, setSort, pollsData, loadMoreRef }) => {
  return (
    <>
      <Helmet>
        <title>My Polls | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <Container>
          {pollsData.isLoading ? (
            <>
              <PollsHeaderContent sort={sort} setSort={setSort} />
            </>
          ) : (
            <div>
              {pollsData.data.pages[0].polls.length <= 0 ? (
                <PollsEmptyScreen isSameUser />
              ) : (
                <>
                  <PollsHeaderContent sort={sort} setSort={setSort} />

                  {pollsData.data.pages.map((page, i) => (
                    <Fragment key={i}>
                      {page.polls.map(poll => (
                        <PrivatePoll
                          key={poll._id}
                          poll={poll}
                          queryKey={`my-polls/${sort}`}
                        />
                      ))}
                    </Fragment>
                  ))}
                </>
              )}
            </div>
          )}
        </Container>
      </Main>

      <div ref={loadMoreRef} />

      <Footer />
    </>
  );
};

const PollsHeaderContent = ({ sort, setSort }) => {
  return (
    <Flex justifyContent="space-between" gap="2rem" className="polls-header">
      <div>
        <H1>My Polls</H1>
        <p>Below are all the public and private polls you created.</p>
      </div>

      <OptionsDropDown
        currentOption={sort}
        options={['recent', 'popular', 'public', 'private']}
        onChange={setSort}
        bottom="-185px"
        right="0px"
      />
    </Flex>
  );
};

export default MyPolls;
