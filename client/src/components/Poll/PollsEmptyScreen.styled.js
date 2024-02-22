import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from '../Button/Button.styled';
import iconNoPolls from '../../assets/icon-no-polls-data.svg';

const PollsEmptyScreen = ({  isSameUser }) => {
  return (
    <StyledPollsEmptyScreen>
      <img src={iconNoPolls} alt="No Polls Found" />
      <h2>No public polls found</h2>

      <p>
        {isSameUser
          ? "Create a poll now, it's free and only takes a minute"
          : 'Looks like the user has no public polls'}
      </p>

      {isSameUser && (
        <StyledButton $type="secondary" as={Link} to="/new">
          Create Poll
        </StyledButton>
      )}
    </StyledPollsEmptyScreen>
  );
};

const StyledPollsEmptyScreen = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.75rem;
  }

  p {
    margin: 1.5rem 0;
  }
`;

export default PollsEmptyScreen;
