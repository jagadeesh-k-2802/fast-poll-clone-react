import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReCAPTCHA from 'react-google-recaptcha';
import moment from 'moment';
import Main from './components/Main.styled';
import DropDownWrapper from './components/DropDownWrapper.styled';
import SocialLink from './components/SocialLink.styled';
import PollChoice from './components/PollChoice.styled';
import { UserDropDownContent } from './components/DropDownContent';
import { SettingsDropDownContent } from './components/DropDownContent';
import { ShareDropDownContent } from './components/DropDownContent';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import Modal from '../../components/Modal/Modal.styled';
import TextField from '../../components/InputField/TextField.styled';
import PollLinkShareModal from '../../components/Poll/PollLinkShareModal.styled';
import PollQrCodeModal from '../../components/Poll/PollQrCodeModal.styled';
import Flex from '../../components/Flex/Flex.styled';
import DropDown from '../../components/DropDown/DropDown.styled';
import StyledButton from '../../components/Button/Button.styled';
import Container from '../../components/Container/Container.styled';
import H1 from '../../components/Typography/H1.styled';
import Divider from '../../components/Divider/Divider.styled';
import LoginModalContent from './components/LoginModalContent.styled';
import PollSecured from './components/PollSecured.styled';
import PollOptions from '../../components/Poll/PollOptions';
import { getFacebookLink, getTwitterLink } from '../../utils/functions';
import { getWhatsappLink } from '../../utils/functions';
import { getPollLink, getPollResultsLink } from '../../utils/functions';
import constants from '../../constants';

const PollVote = ({
  theme,
  currentUser,
  pollData,
  selectedChoice,
  setSelectedChoice,
  userDropDownVisible,
  settingsDropDownVisible,
  shareDropDownVisible,
  showUserDropDown,
  showSettingsDropDown,
  closeUserDropDown,
  closeSettingsDropDown,
  showShareDropDown,
  closeShareDropDown,
  email,
  password,
  setCaptchaValue,
  loginModalVisible,
  linkShareModalVisible,
  showLinkShareModal,
  hideLinkShareModal,
  qrCodeModalVisible,
  showQrCodeModal,
  hideQrCodeModal,
  onChange,
  onSubmit,
  toggleOption,
  onLoginSubmit
}) => {
  return (
    <>
      <Helmet>
        <title>Vote - {pollData.data.poll.question} | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <Flex justifyContent="flex-end" alignItems="center">
          <DropDownWrapper>
            <button className="share" onClick={showShareDropDown}>
              Share
            </button>

            {pollData.data.poll.user &&
              pollData.data.poll?.user?.username === currentUser?.username && (
                <button className="settings" onClick={showSettingsDropDown}>
                  Settings
                </button>
              )}

            <DropDown
              visible={settingsDropDownVisible}
              onHide={closeSettingsDropDown}
              right="15px"
              bottom="-315px"
              width="250px"
            >
              <SettingsDropDownContent>
                <PollOptions
                  poll={pollData.data.poll}
                  theme={theme}
                  toggleOption={toggleOption}
                />
              </SettingsDropDownContent>
            </DropDown>

            <DropDown
              visible={shareDropDownVisible}
              onHide={closeShareDropDown}
              right="40px"
              bottom="-215px"
              width="250px"
            >
              <ShareDropDownContent>
                <a
                  href={getTwitterLink(
                    `${pollData.data.poll.question}`,
                    getPollLink(pollData.data.poll._id)
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="twitter"
                >
                  Share on Twitter
                </a>
                <a
                  href={getFacebookLink(getPollLink(pollData.data.poll._id))}
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                >
                  Share on Facebook
                </a>
                <a
                  href={getWhatsappLink(
                    `${pollData.data.poll.question}`,
                    getPollLink(pollData.data.poll._id)
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp"
                >
                  Share on Whatsapp
                </a>
                <button
                  className="link"
                  onClick={() => {
                    showLinkShareModal();
                    closeShareDropDown();
                  }}
                >
                  Share Link
                </button>
                <button
                  className="qr-code"
                  onClick={() => {
                    showQrCodeModal();
                    closeShareDropDown();
                  }}
                >
                  Share QR Code
                </button>
              </ShareDropDownContent>
            </DropDown>
          </DropDownWrapper>
        </Flex>

        <Flex justifyContent="center" alignItems="center" margin="6rem 0">
          <Container maxWidth="600px">
            <h3 className="category">{pollData.data.poll.category}</h3>
            <H1>{pollData.data.poll.question}</H1>
            <p>
              Asked by{' '}
              {pollData.data.poll.user ? (
                <Link
                  to={`/user/${pollData.data.poll.user.username}`}
                  onMouseEnter={showUserDropDown}
                  onMouseLeave={closeUserDropDown}
                >
                  {pollData.data.poll.user.fullName}
                </Link>
              ) : (
                <span>Anonymous</span>
              )}{' '}
              about {moment(pollData.data.poll.createdAt).fromNow()}
              {pollData.data.poll.visibility === 'private' && (
                <span className="private-notice">Private</span>
              )}
            </p>

            {pollData.data.poll.user && (
              <DropDown
                visible={userDropDownVisible}
                onHide={closeUserDropDown}
                margin="1rem 0"
                width="230px"
              >
                <UserDropDownContent
                  onMouseEnter={showUserDropDown}
                  onMouseLeave={closeUserDropDown}
                >
                  <img
                    src={`/avatar/${pollData.data.poll.user.avatar}`}
                    alt="poll owner avatar"
                  />
                  <h3>{pollData.data.poll.user.fullName}</h3>

                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    gap="1rem"
                    margin="1rem 0"
                  >
                    <SocialLink
                      name="facebook"
                      link={pollData.data.poll.user.socialProfiles.facebook}
                    />
                    <SocialLink
                      name="twitter"
                      link={pollData.data.poll.user.socialProfiles.twitter}
                    />
                    <SocialLink
                      name="instagram"
                      link={pollData.data.poll.user.socialProfiles.instagram}
                    />
                    <SocialLink
                      name="producthunt"
                      link={pollData.data.poll.user.socialProfiles.producthunt}
                    />
                  </Flex>

                  <Divider />

                  <StyledButton
                    $type="primary"
                    $fullWidth
                    as={Link}
                    to={`/user/${pollData.data.poll.user.username}`}
                  >
                    Visit Profile
                  </StyledButton>
                </UserDropDownContent>
              </DropDown>
            )}

            <form onSubmit={onSubmit}>
              {pollData.data.poll.choices.map(choice => (
                <PollChoice
                  key={choice._id}
                  choice={choice}
                  selectedChoice={selectedChoice}
                  setSelectedChoice={setSelectedChoice}
                />
              ))}

              <Flex
                className="footer"
                justifyContent="space-between"
                alignItems="center"
                gap="2rem"
              >
                <StyledButton $type="primary" type="submit">
                  Submit your vote
                </StyledButton>

                <Link
                  className="result-link"
                  to={`/poll/results/${pollData.data.poll._id}`}
                >
                  Jump to results
                </Link>
              </Flex>

              {pollData.data.poll.options.enableCaptcha && (
                <ReCAPTCHA
                  sitekey={constants.RECAPTCHA_CLIENT_KEY}
                  onChange={value => setCaptchaValue(value)}
                />
              )}
            </form>

            {pollData.data.poll.options.loginToVote && (
              <PollSecured>
                Poll secured using sessions to stop duplicate votes being cast.
              </PollSecured>
            )}
          </Container>
        </Flex>
      </Main>

      <Modal visible={loginModalVisible} onHide={() => {}}>
        <LoginModalContent>
          <div className="icon" />

          <H1>Login</H1>
          <p>You need to be logged in to vote on this poll.</p>

          <form onSubmit={onLoginSubmit}>
            <TextField
              placeholder="Email Address"
              type="email"
              name="email"
              backgroundColor="#f4f4f4"
              boxShadow="none"
              fullWidth
              value={email}
              onChange={onChange}
            />

            <TextField
              placeholder="Password"
              type="password"
              name="password"
              backgroundColor="#f4f4f4"
              boxShadow="none"
              fullWidth
              value={password}
              onChange={onChange}
            />

            <Flex justifyContent="space-between" alignItems="center">
              <StyledButton $type="primary" type="submit">
                Login
              </StyledButton>

              <Link to="/password-reset">Forgot your password ?</Link>
            </Flex>
          </form>

          <Link className="footer" to="/sign-up">
            Create a free <span>Fast Poll</span> account now.
          </Link>
        </LoginModalContent>
      </Modal>

      <PollLinkShareModal
        visible={linkShareModalVisible}
        onHide={hideLinkShareModal}
        pollVoteLink={getPollLink(pollData.data.poll._id)}
        pollResultsLink={getPollResultsLink(pollData.data.poll._id)}
      />

      <PollQrCodeModal
        visible={qrCodeModalVisible}
        onHide={hideQrCodeModal}
        pollVoteLink={getPollLink(pollData.data.poll._id)}
        pollResultsLink={getPollResultsLink(pollData.data.poll._id)}
      />

      <Footer />
    </>
  );
};

export default PollVote;
