import { useState } from 'react';
import styled from 'styled-components';
import PollOptions from '../../../components/Poll/PollOptions';
import Divider from '../../../components/Divider/Divider.styled';
import { getPollLink } from '../../../utils/functions';
import { getTwitterLink, getFacebookLink } from '../../../utils/functions';
import { getWhatsappLink } from '../../../utils/functions';
import twitterIcon from '../../../assets/icon-colour-icon-profile-twitter.svg';
import facebookIcon from '../../../assets/icon-colour-icon-profile-facebook.svg';
import whatsappIcon from '../../../assets/icon-whatsapp.svg';
import linkIcon from '../../../assets/icon-link.svg';
import qrCodeIcon from '../../../assets/icon-qr-code.svg';
import StyledButton from '../../../components/Button/Button.styled';

const PollControlsCard = ({
  currentUser,
  theme,
  totalVote,
  pollData,
  showLinkShareModal,
  showQrCodeModal,
  toggleOption
}) => {
  const [settingsVisible, setSettingsVisible] = useState(false);

  return (
    <StyledPollControlsCard>
      {settingsVisible ? (
        <PollOptions
          poll={{ ...pollData.data.poll, voteCount: pollData.data.voteCount }}
          theme={theme}
          toggleOption={toggleOption}
        />
      ) : (
        <>
          <div>
            <h3>Votes</h3>
            <h2>{totalVote}</h2>
          </div>

          <Divider margin="1.5rem 0" className="divider" />
          <h3 className="share-heading">Share</h3>

          <ShareContent>
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
            <button className="link" onClick={showLinkShareModal}>
              Share Link
            </button>
            <button className="qr-code" onClick={showQrCodeModal}>
              Share QR Code
            </button>
          </ShareContent>
        </>
      )}

      {pollData.data.poll.user &&
        pollData.data.poll?.user?.username === currentUser?.username && (
          <>
            <Divider className="divider" />

            <StyledButton
              $fullWidth
              $type="lightGray"
              className="settings-btn"
              onClick={() => setSettingsVisible(prev => !prev)}
            >
              {settingsVisible ? 'Hide Poll Setttings' : 'Poll Settings'}
            </StyledButton>
          </>
        )}
    </StyledPollControlsCard>
  );
};

const StyledPollControlsCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 1px 3px hsl(0deg 0% 0% / 5%);
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    box-shadow: none;
    padding: 1rem 0;
    margin: 0;

    div.divider {
      display: none;
    }
  }

  button.settings-btn {
    padding: 1.5rem 3rem;
    margin: 2rem 0;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  button,
  a {
    padding: 0.2rem;
  }

  h3 {
    font-size: 1.4rem;
    color: #c1c1c1;
    margin-bottom: 1rem;

    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  h2 {
    font-size: 5rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 600px) {
      font-size: 2.6rem;
    }
  }

  h3.share-heading {
    margin-top: 1rem;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;

const ShareContent = styled.div`
  padding-bottom: 1.8rem;

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 0;
  }

  a,
  button {
    display: inline-flex;
    width: 100%;
    font-weight: 500;
    font-size: 1.5rem;
    background-color: transparent;
    padding: 1rem 0 1rem 3.5rem;
    background-repeat: no-repeat;
    background-size: 18px;
    background-position: center left;

    @media screen and (max-width: 600px) {
      width: 30px;
      height: 30px;
      background-size: 22px;
      overflow: hidden;
    }

    &.twitter {
      color: ${({ theme }) => theme.colors.twitterColor};
      background-image: url('${twitterIcon}');
    }

    &.facebook {
      color: ${({ theme }) => theme.colors.facebookColor};
      background-image: url('${facebookIcon}');
    }

    &.whatsapp {
      color: ${({ theme }) => theme.colors.whatsappColor};
      background-image: url('${whatsappIcon}');
    }

    &.link {
      color: ${({ theme }) => theme.colors.warning};
      background-image: url('${linkIcon}');
    }

    &.qr-code {
      color: ${({ theme }) => theme.colors.purple};
      background-image: url('${qrCodeIcon}');
    }
  }
`;

export default PollControlsCard;
