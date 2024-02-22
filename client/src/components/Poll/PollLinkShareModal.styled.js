import styled from 'styled-components';
import Modal from '../Modal/Modal.styled';
import H1 from '../Typography/H1.styled';
import StyledButton from '../Button/Button.styled';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

const PollLinkShareModal = ({
  visible,
  onHide,
  pollVoteLink,
  pollResultsLink
}) => {
  const [voteCopied, copyVoteLink] = useCopyToClipboard(pollVoteLink);
  const [resultsCopied, copyResultsLink] = useCopyToClipboard(pollResultsLink);

  return (
    <Modal visible={visible} onHide={onHide} showClose>
      <StyledPollLinkShareModal>
        <H1>Share link</H1>
        <p>Copy a link from below to easily share this poll.</p>

        <FieldWrapper>
          <label>Poll vote link</label>
          <input value={pollVoteLink} readOnly />
          <StyledButton
            $type={voteCopied ? 'warning' : 'secondary'}
            onClick={copyVoteLink}
          >
            {voteCopied ? 'Copied' : 'Copy Link'}
          </StyledButton>
        </FieldWrapper>

        <FieldWrapper>
          <label>Poll results link</label>
          <input value={pollResultsLink} readOnly />
          <StyledButton
            $type={resultsCopied ? 'warning' : 'secondary'}
            onClick={copyResultsLink}
          >
            {resultsCopied ? 'Copied' : 'Copy Link'}
          </StyledButton>
        </FieldWrapper>
      </StyledPollLinkShareModal>
    </Modal>
  );
};

const StyledPollLinkShareModal = styled.div`
  padding: 3rem 5rem;
  width: 600px;

  @media screen and (max-width: 600px) {
    width: auto;

    h1 {
      font-size: 2.8rem;
    }
  }

  label {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.2475px;
    color: #b1b1b1;
  }

  input {
    display: inline-block;
    background-color: #f8f8f8;
    width: 100%;
    font-size: 1.35rem;
    line-height: 24px;
    color: #777;
    font-weight: 600;
    padding: 1.4rem 1.8rem;
    border: none;
    outline: none;
    margin: 1rem 0;
    border-radius: 5px;

    @media screen and (max-width: 600px) {
      margin-bottom: 0;
    }
  }

  button {
    font-size: 1.2rem;
    padding: 0.5rem;
    position: absolute;
    right: 20px;
    bottom: 21px;

    @media screen and (max-width: 600px) {
      position: static;
      width: 100%;
      padding: 1rem 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;

const FieldWrapper = styled.div`
  position: relative;
  margin: 2rem 0;
`;

export default PollLinkShareModal;
