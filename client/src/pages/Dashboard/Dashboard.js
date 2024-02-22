import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Main from './components/Main.styled';
import { DashboardCardsWrapper } from './components/DashboardStats.styled';
import { DashboardCard } from './components/DashboardStats.styled';
import PrivatePoll from '../../components/Poll/PrivatePollContainer';
import PollsEmptyScreen from '../../components/Poll/PollsEmptyScreen.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import H1 from '../../components/Typography/H1.styled';
import Container from '../../components/Container/Container.styled';
import iconPollsCreated from '../../assets/icon-polls-created-dashboard.svg';
import iconVotesCastDashboard from '../../assets/icon-votes-dashboard.svg';
import iconCommentsPosted from '../../assets/icon-comments-dashboard.svg';

const Dashboard = ({ pollsData, dashboardData, loadMoreRef }) => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <Container>
          <H1>Dashboard</H1>
          <p>Below are some stats around your activity.</p>

          <DashboardCardsWrapper>
            <DashboardCard
              img={iconPollsCreated}
              count={
                dashboardData.isLoading ? '...' : dashboardData.data.pollCount
              }
              text="Polls Created"
            />

            <DashboardCard
              img={iconVotesCastDashboard}
              count={
                dashboardData.isLoading ? '...' : dashboardData.data.voteCount
              }
              text="Votes Cast"
            />

            <DashboardCard
              img={iconCommentsPosted}
              count={
                dashboardData.isLoading
                  ? '...'
                  : dashboardData.data.commentCount
              }
              text="Comments Posted"
            />
          </DashboardCardsWrapper>

          {pollsData.isLoading ? (
            <>
              <PollsHeader />
            </>
          ) : (
            <>
              {pollsData.data.pages[0].polls.length <= 0 ? (
                <PollsEmptyScreen isSameUser />
              ) : (
                <>
                  <PollsHeader />
                  {pollsData.data.pages.map((page, i) => (
                    <Fragment key={i}>
                      {page.polls.map(poll => (
                        <PrivatePoll
                          key={poll._id}
                          poll={poll}
                          queryKey="my-polls/popular"
                        />
                      ))}
                    </Fragment>
                  ))}
                </>
              )}
            </>
          )}
        </Container>
      </Main>

      <div ref={loadMoreRef} />

      <Footer />
    </>
  );
};

const PollsHeader = () => {
  return <h2>Your Popular Polls</h2>;
};

export default Dashboard;
