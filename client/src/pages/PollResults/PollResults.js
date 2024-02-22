import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Main from './components/Main.styled';
import DropDownWrapper from './components/DropDownWrapper.styled';
import CommentCard from './components/CommentCard.styled';
import CommentTextBox from './components/CommentTextBox.styled';
import CommentLoginPrompt from './components/CommentLoginPrompt.styled';
import VotingClosed from './components/VotingClosed.styled';
import PollResultCard from './components/PollResultCard.styled';
import { UserDropDownContent } from './components/DropDownContent';
import { SettingsDropDownContent } from './components/DropDownContent';
import { ShareDropDownContent } from './components/DropDownContent';
import ReportModalContent from './components/ReportModalContent.styled';
import SocialLink from './components/SocialLink.styled';
import H1 from '../../components/Typography/H1.styled';
import PollResultsWrapper from './components/PollResultsWrapper.styled';
import TextArea from '../../components/InputField/TextArea.styled';
import Flex from '../../components/Flex/Flex.styled';
import Modal from '../../components/Modal/Modal.styled';
import DropDown from '../../components/DropDown/DropDown.styled';
import StyledButton from '../../components/Button/Button.styled';
import Divider from '../../components/Divider/Divider.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import PollOptions from '../../components/Poll/PollOptions';
import Footer from '../../components/Footer/FooterContainer';
import PollQrCodeModal from '../../components/Poll/PollQrCodeModal.styled';
import PollLinkShareModal from '../../components/Poll/PollLinkShareModal.styled';
import Container from '../../components/Container/Container.styled';
import VotedBox from './components/VotedBox.stlyed';
import PollControlsCard from './components/PollControlsCard.styled';
import { getFacebookLink, getTwitterLink } from '../../utils/functions';
import { getWhatsappLink } from '../../utils/functions';
import { getPollLink, getPollResultsLink } from '../../utils/functions';
import CommentsWrapper from './components/CommentsWrapper.styled';
import CommentsDisabled from './components/CommentsDisabled.styled';
import Spacer from '../../components/Spacer/Spacer.styled';

const PollResults = ({
  currentUser,
  pollData,
  commentsData,
  theme,
  messageRef,
  reply,
  setReply,
  showUserDropDown,
  closeUserDropDown,
  linkShareModalVisible,
  qrCodeModalVisible,
  reportPollModalVisible,
  reportCommentModalVisible,
  userDropDownVisible,
  showLinkShareModal,
  showQrCodeModal,
  hideLinkShareModal,
  showReportPollModal,
  hideReportPollModal,
  hideReportCommentModal,
  shareDropDownVisible,
  showShareDropDown,
  closeShareDropDown,
  settingsDropDownVisible,
  showSettingsDropDown,
  closeSettingsDropDown,
  hideQrCodeModal,
  toggleOption,
  onReportPoll,
  onCommentSubmit,
  onReportComment
}) => {
  return (
    <>
      <Helmet>
        <title>{pollData.data.poll.question} | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      {pollData.data.poll.voting === 'close' && (
        <VotingClosed>
          Voting has closed on this poll, voting is now disabled.
        </VotingClosed>
      )}

      <Main>
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          className="dropdown-wrapper"
        >
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
                  poll={{
                    ...pollData.data.poll,
                    voteCount: pollData.data.voteCount
                  }}
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

        <Container id="test" className="large">
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
              margin="0.5rem 0"
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

          <PollResultsWrapper>
            <div>
              {pollData.data.votes.map((vote, index) => (
                <PollResultCard
                  key={vote._id}
                  vote={vote}
                  totalVote={pollData.data.voteCount}
                  first={index === 0}
                />
              ))}
            </div>

            <div>
              {pollData.data.voteByCurrentUser ? (
                <VotedBox>
                  You voted{' '}
                  <strong>{pollData.data.voteByCurrentUser.name}</strong> on
                  this poll
                </VotedBox>
              ) : (
                pollData.data.poll.voting !== 'close' && (
                  <StyledButton
                    $fullWidth
                    $type="primary"
                    as={Link}
                    to={`/poll/${pollData.data.poll._id}`}
                  >
                    Submit your vote
                  </StyledButton>
                )
              )}

              <PollControlsCard
                currentUser={currentUser}
                theme={theme}
                totalVote={pollData.data.voteCount}
                pollData={pollData}
                showLinkShareModal={showLinkShareModal}
                showQrCodeModal={showQrCodeModal}
                toggleOption={toggleOption}
              />

              {!pollData.data.poll.user ||
              pollData.data.poll?.user?.username !== currentUser?.username ? (
                <button className="report-btn" onClick={showReportPollModal}>
                  Report abuse
                </button>
              ) : null}
            </div>
          </PollResultsWrapper>
        </Container>

        <span id="comments-top" />

        <CommentsWrapper
          hide={
            !commentsData.isLoading &&
            commentsData.data.pages[0].comments.length === 0 &&
            !pollData.data.poll.options.addComments
          }
        >
          <Container className="large">
            {commentsData.isLoading ? null : (
              <>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  margin="0 0 1.45rem 0"
                >
                  <h2>Comments</h2>
                  <p>{commentsData.data.pages[0].total} comments</p>
                </Flex>
                {commentsData.data.pages[0].comments.length > 0 ? (
                  <>
                    {commentsData.data.pages.map((page, i) => (
                      <Fragment key={i}>
                        {page.comments.map(comment => (
                          <CommentCard
                            key={comment._id}
                            currentUser={currentUser}
                            comment={comment}
                            setReply={setReply}
                            onReport={onReportComment}
                            messageRef={messageRef}
                            hideReply={!pollData.data.poll.options.addComments}
                          />
                        ))}
                      </Fragment>
                    ))}

                    {commentsData.hasNextPage && (
                      <Flex justifyContent="center" margin="2rem 0">
                        <StyledButton
                          $type="lightGray"
                          className="load-more-btn"
                          onClick={commentsData.fetchNextPage}
                          disabled={commentsData.isFetchingNextPage}
                        >
                          {commentsData.isFetchingNextPage
                            ? 'Loading...'
                            : 'Load More'}
                        </StyledButton>
                      </Flex>
                    )}
                  </>
                ) : null}

                {pollData.data.poll.options.addComments ? (
                  currentUser ? (
                    <CommentTextBox reply={reply}>
                      <img
                        src={`/avatar/${currentUser.avatar}`}
                        alt="user-avatar"
                      />

                      {reply && (
                        <img
                          className="reply-img"
                          src={`/avatar/${reply.user.avatar}`}
                          alt="replying to"
                        />
                      )}

                      <form onSubmit={onCommentSubmit}>
                        <TextArea
                          name="message"
                          placeholder="Write Comment"
                          height="120px"
                          fullWidth
                          ref={messageRef}
                        />
                        <Flex gap="1.5rem">
                          <StyledButton $type="primary" type="submit">
                            {reply ? 'Post Reply' : 'Post Comment'}
                          </StyledButton>

                          {reply && (
                            <StyledButton
                              $type="ghost"
                              onClick={() => setReply(null)}
                            >
                              Cancel
                            </StyledButton>
                          )}
                        </Flex>
                      </form>
                    </CommentTextBox>
                  ) : (
                    <CommentLoginPrompt>
                      <h3>Login to post a comment</h3>
                      <p>
                        Don't have an account? Signing up takes 20 seconds and
                        is completly free.
                      </p>
                      <Flex gap="1.6rem">
                        <StyledButton $type="secondary" as={Link} to="/sign-up">
                          Sign Up
                        </StyledButton>
                        <StyledButton $type="primary" as={Link} to="/login">
                          Login
                        </StyledButton>
                      </Flex>
                    </CommentLoginPrompt>
                  )
                ) : (
                  commentsData.data.pages[0].comments.length > 0 && (
                    <CommentsDisabled>
                      <p>Comments have been disabled by the poll owner</p>
                    </CommentsDisabled>
                  )
                )}
              </>
            )}
          </Container>
        </CommentsWrapper>
      </Main>

      <Modal
        visible={reportPollModalVisible}
        onHide={hideReportPollModal}
        showClose
      >
        <ReportModalContent>
          <H1>Report poll</H1>
          <p>
            If you feel this poll is inappropriate or breaches our terms of use
            you can report it and a member of the team will review it.
          </p>
          <StyledButton $type="danger" onClick={onReportPoll}>
            Report Poll
          </StyledButton>
        </ReportModalContent>
      </Modal>

      <Modal
        visible={reportCommentModalVisible}
        onHide={hideReportCommentModal}
        showClose
      >
        <ReportModalContent>
          <H1>Do you want to report this comment?</H1>
          <p>
            If you feel this comment is inappropriate or breaches our terms of
            use you can report it and a member of the team will review it.
          </p>
          <StyledButton $type="danger" onClick={onReportComment}>
            Report Comment
          </StyledButton>
        </ReportModalContent>
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
      <Spacer padding="8rem 0" />
    </>
  );
};

export default PollResults;
