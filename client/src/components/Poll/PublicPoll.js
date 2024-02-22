import { Link } from 'react-router-dom';
import moment from 'moment';
import { StyledPoll, VoteCount } from './StyledPoll.styled';

// Used when viewing Public polls, when visiting other profiles
const PublicPoll = ({ poll }) => {
  return (
    <StyledPoll as={Link} to={`/poll/results/${poll._id}`}>
      <h3>{poll.category}</h3>
      <h2>{poll.question}</h2>
      <time>Created {moment(poll.createdAt).fromNow()}</time>
      <VoteCount>{poll.voteCount} Votes</VoteCount>
    </StyledPoll>
  );
};

export default PublicPoll;
