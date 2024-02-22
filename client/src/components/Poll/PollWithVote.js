import { Link } from 'react-router-dom';
import moment from 'moment';
import { StyledPoll, PollFooter } from './StyledPoll.styled';
import { VoteInfo, VoteCount, VoteCreatedAt } from './StyledPoll.styled';

// Used when viewing My polls or dashboard
const PollWithVote = ({ vote }) => {
  return (
    <StyledPoll as={Link} to={`/poll/results/${vote.poll._id}`}>
      <h3>{vote.poll.category}</h3>
      <h2>{vote.poll.question}</h2>
      <time>Created {moment(vote.poll.createdAt).fromNow()}</time>

      <PollFooter>
        <VoteInfo>
          You voted <strong>{vote.choice}</strong> on this poll
          <VoteCreatedAt>{moment(vote.createdAt).fromNow()}</VoteCreatedAt>
        </VoteInfo>
      </PollFooter>

      <VoteCount>{vote.poll.voteCount} Votes</VoteCount>
    </StyledPoll>
  );
};

export default PollWithVote;
