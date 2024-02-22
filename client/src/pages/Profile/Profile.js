import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ProfileHeader, SocialLink } from './components/ProfileHeader.styled';
import { ProfileHeaderWrapper } from './components/ProfileHeader.styled';
import { Left, Right } from './components/ProfileHeader.styled';
import Main from './components/Main.styled';
import PublicPoll from '../../components/Poll/PublicPoll';
import OptionsDropDown from '../../components/OptionsDropDown/OptionsDropDown.styled';
import Flex from '../../components/Flex/Flex.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import H1 from '../../components/Typography/H1.styled';
import PollsEmptyScreen from '../../components/Poll/PollsEmptyScreen.styled';
import Container from '../../components/Container/Container.styled';
import StyledButton from '../../components/Button/Button.styled';

const Profile = ({
  currentUser,
  sort,
  setSort,
  profileData,
  pollsData,
  loadMoreRef
}) => {
  return (
    <>
      <Helmet>
        <title>{profileData.data.profile.fullName} Profile | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <ProfileHeader>
        <Container>
          <ProfileHeaderWrapper>
            <Left>
              <img
                src={`/avatar/${profileData.data.profile.avatar}`}
                alt="avatar"
              />
              <H1>{profileData.data.profile.fullName}</H1>
              <p>{profileData.data.profile.bio}</p>

              <Flex alignItems="center" margin="2rem 0" gap="1.5rem">
                <SocialLink
                  name="facebook"
                  link={profileData.data.profile.socialProfiles.facebook}
                />
                <SocialLink
                  name="twitter"
                  link={profileData.data.profile.socialProfiles.twitter}
                />
                <SocialLink
                  name="instagram"
                  link={profileData.data.profile.socialProfiles.instagram}
                />
                <SocialLink
                  name="producthunt"
                  link={profileData.data.profile.socialProfiles.producthunt}
                />
              </Flex>
            </Left>

            <Right>
              <div>
                <h3>{profileData.data.profile.publicPollsCreated}</h3>
                <p>Polls Created</p>
              </div>
            </Right>

            {currentUser?.username === profileData.data.profile.username && (
              <StyledButton $type="ghost" as={Link} to="/settings">
                Edit Profile
              </StyledButton>
            )}
          </ProfileHeaderWrapper>
        </Container>
      </ProfileHeader>

      <Main>
        <Container>
          {profileData.data.profile.publicPollsCreated > 0 ? (
            <>
              <Flex justifyContent="space-between" gap="2rem" className="polls-header">
                <div>
                  <H1>Polls</H1>
                  <p>
                    Below are all the public polls created by{' '}
                    {profileData.data.profile.fullName}
                  </p>
                </div>

                <OptionsDropDown
                  currentOption={sort}
                  options={['recent', 'popular']}
                  onChange={setSort}
                  bottom="-110px"
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
            </>
          ) : (
            <PollsEmptyScreen
              isSameUser={currentUser?.username === profileData?.data?.username}
            />
          )}
        </Container>
      </Main>

      <div ref={loadMoreRef} />

      <Footer />
    </>
  );
};

export default Profile;
