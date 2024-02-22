import { Link } from 'react-router-dom';
import moment from 'moment';
import PollOptions from './PollOptions';
import { PollWrapper } from './StyledPoll.styled';
import { StyledPoll, VoteCount, PollFooter } from './StyledPoll.styled';
import { PollInfo, DropDownWrapper } from './StyledPoll.styled';
import { DropDownContent } from './StyledPoll.styled';
import DropDown from '../../components/DropDown/DropDown.styled';

// Used when viewing My polls or dashboard
const PrivatePoll = ({
  poll,
  theme,
  showDropDown,
  dropDownVisible,
  closeDropDown,
  toggleOption
}) => {
  return (
    <PollWrapper>
      <StyledPoll as={Link} to={`/poll/results/${poll._id}`}>
        <h3>{poll.category}</h3>
        <h2>{poll.question}</h2>
        <time>Created {moment(poll.createdAt).fromNow()}</time>

        <PollFooter>
          <div>
            {poll.voting === 'close' && (
              <PollInfo
                $type="voting-closed"
                onClick={e => toggleOption(e, 'voting')}
                children="Voting Closed"
              />
            )}

            {poll.visibility === 'public' ? (
              <PollInfo
                $type="public"
                onClick={e => toggleOption(e, 'visibility')}
                children="Public"
              />
            ) : (
              <PollInfo
                $type="private"
                onClick={e => toggleOption(e, 'visibility')}
                children="Private"
              />
            )}
          </div>

          <DropDownWrapper>
            <button onClick={showDropDown}>Settings</button>
          </DropDownWrapper>
        </PollFooter>

        <VoteCount>{poll.voteCount} Votes</VoteCount>
      </StyledPoll>

      <DropDown
        visible={dropDownVisible}
        onHide={closeDropDown}
        bottom="75px"
        right="-15px"
      >
        <DropDownContent>
          <PollOptions poll={poll} theme={theme} toggleOption={toggleOption} />
        </DropDownContent>
      </DropDown>
    </PollWrapper>
  );
};

export default PrivatePoll;
