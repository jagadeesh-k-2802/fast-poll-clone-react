import StyledButton from '../../../components/Button/Button.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconNoVotes from '../../../assets/icon-no-votes-data.svg';

const VotesEmptyScreen = () => {
  return (
    <StyledVotesEmptyScreen>
      <img src={iconNoVotes} alt="No Polls Found" />
      <h2>You haven’t voted on any polls yet</h2>

      <p>Browse public polls you can vote on</p>

      <StyledButton $type="secondary" as={Link} to="/public">
        Get Started
      </StyledButton>
    </StyledVotesEmptyScreen>
  );
};

const StyledVotesEmptyScreen = styled.div`
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

export default VotesEmptyScreen;
