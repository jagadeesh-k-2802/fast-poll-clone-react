import { Link } from 'react-router-dom';
import { StyledDropDownItem } from './StyledPoll.styled';
import Divider from '../Divider/Divider.styled';

const PollOptions = ({ poll, theme, toggleOption }) => {
  return (
    <>
      {poll.voteCount > 0 ? (
        <StyledDropDownItem>
          <p style={{ color: '#ccc' }}>Edit Poll</p>
          <span children="Disabled" style={{ backgroundColor: '#ccc' }} />
        </StyledDropDownItem>
      ) : (
        <StyledDropDownItem as={Link} to={`/poll/edit/${poll._id}`}>
          <p>Edit Poll</p>
        </StyledDropDownItem>
      )}

      <StyledDropDownItem onClick={e => toggleOption(e, 'visibility')}>
        <p>Poll Visibility</p>
        <span
          children={poll.visibility}
          style={{
            backgroundColor:
              poll.visibility === 'public'
                ? theme.colors.secondary
                : theme.colors.warning
          }}
        />
      </StyledDropDownItem>

      <StyledDropDownItem onClick={e => toggleOption(e, 'voting')}>
        <p>Voting</p>
        <span
          children={poll.voting === 'open' ? 'Open' : 'Closed'}
          style={{
            backgroundColor:
              poll.voting === 'open'
                ? theme.colors.primary
                : theme.colors.danger
          }}
        />
      </StyledDropDownItem>

      <Divider className="divider" />

      <StyledDropDownItem onClick={e => toggleOption(e, 'comments')}>
        <p>Comments</p>
        <span
          children={poll.options.addComments ? 'On' : 'Off'}
          style={{
            backgroundColor: poll.options.addComments
              ? theme.colors.primary
              : theme.colors.darkGray
          }}
        />
      </StyledDropDownItem>

      <StyledDropDownItem onClick={e => toggleOption(e, 'login-to-vote')}>
        <p>Login To Vote</p>
        <span
          children={poll.options.loginToVote ? 'On' : 'Off'}
          style={{
            backgroundColor: poll.options.loginToVote
              ? theme.colors.primary
              : theme.colors.darkGray
          }}
        />
      </StyledDropDownItem>

      <StyledDropDownItem onClick={e => toggleOption(e, 'captcha')}>
        <p>Captcha</p>
        <span
          children={poll.options.enableCaptcha ? 'On' : 'Off'}
          style={{
            backgroundColor: poll.options.enableCaptcha
              ? theme.colors.primary
              : theme.colors.darkGray
          }}
        />
      </StyledDropDownItem>
    </>
  );
};

export default PollOptions;
