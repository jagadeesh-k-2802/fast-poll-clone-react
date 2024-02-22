import styled from 'styled-components';
import QRCode from 'react-qr-code';
import StyledButton from '../Button/Button.styled';
import Modal from '../Modal/Modal.styled';
import H1 from '../Typography/H1.styled';
import { useState } from 'react';

const PollQrCodeModal = ({
  visible,
  onHide,
  pollVoteLink,
  pollResultsLink
}) => {
  const [currentLink, setCurrentLink] = useState('vote-link');

  const toggle = () => {
    setCurrentLink(prev =>
      prev === 'vote-link' ? 'results-link' : 'vote-link'
    );
  };

  return (
    <Modal visible={visible} onHide={onHide} showClose>
      <StyledPollQrCodeModal>
        <H1>QR Code</H1>
        <p>
          Use this at a public event or confrenece to allow large groups of
          people to access the poll url easily. The QR code is unique to this
          poll.
        </p>

        <QrDisplay>
          <QRCode
            size={200}
            value={currentLink === 'vote-link' ? pollVoteLink : pollResultsLink}
          />

          <p>Poll {currentLink === 'vote-link' ? 'Vote' : 'Results'} Page</p>
        </QrDisplay>

        <StyledButton $fullWidth $type="secondary" onClick={toggle}>
          Show {currentLink === 'vote-link' ? 'Results' : 'Vote'} Page QR Code
        </StyledButton>
      </StyledPollQrCodeModal>
    </Modal>
  );
};

const StyledPollQrCodeModal = styled.div`
  padding: 3rem 5rem;
  width: 550px;

  @media screen and (max-width: 600px) {
      width: auto;
      padding: 3rem;

      h1 {
        font-size: 3rem;
      }
    }

  p {
    line-height: 1.3;
  }
`;

const QrDisplay = styled.div`
  svg {
    margin: 1rem 0;
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
  }

  background-color: #f5f5f5;
  padding: 2rem 4rem 2rem 4rem;
  margin: 2rem 0;
  text-align: center;
  color: #898989;

  p {
    font-size: 1.4rem;
    margin-top: 2rem;
  }
`;

export default PollQrCodeModal;
