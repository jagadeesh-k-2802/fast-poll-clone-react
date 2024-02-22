import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Main from './components/Main.styled';
import PollSecured from './components/PollSecured.styled';
import PollChoicesMessage from './components/PollChoicesMessage.styled';
import PollChoiceTextField from '../../components/Poll/PollChoiceTextField.styled';
import TextAreaGroup from '../../components/InputGroup/TextAreaGroup.styled';
import SelectFieldGroup from '../../components/InputGroup/SelectFieldGroup.styled';
import Divider from '../../components/Divider/Divider.styled';
import Label from '../../components/InputGroup/Label.styled';
import { PollOptions } from '../../components/Poll/PollOptions.styled';
import { PollOption } from '../../components/Poll/PollOptions.styled';
import StyledButton from '../../components/Button/Button.styled';
import Flex from '../../components/Flex/Flex.styled';
import H1 from '../../components/Typography/H1.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import Container from '../../components/Container/Container.styled';

const EditPoll = ({
  currentUser,
  question,
  category,
  visibility,
  pollChoices,
  addPollChoice,
  pollOptions,
  onChange,
  onSubmit,
  onPollChoiceChange,
  onPollChoiceColorChange,
  onPollOptionsChange
}) => {
  return (
    <>
      <Helmet>
        <title>Edit | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <Container>
          <H1>Edit poll</H1>
          <p>Update the below fields to edit your poll</p>

          <form onSubmit={onSubmit}>
            <TextAreaGroup
              name="question"
              label="Poll Question"
              placeholder="Eg: What is your favourite color"
              onChange={onChange}
              value={question}
              height="150px"
              fullWidth
            />

            {pollChoices.map(item => (
              <PollChoiceTextField
                key={item.id}
                name={`pollOption${item.id}`}
                label="Poll Option"
                placeholder={`Eg: Option ${item.id + 1}`}
                value={item.name}
                onChange={onPollChoiceChange}
                onColorChange={color => onPollChoiceColorChange(item, color)}
                color={item.color}
              />
            ))}

            {pollChoices.length >= 15 ? (
              <PollChoicesMessage>
                <p>
                  <Link to="/pro">Go Pro</Link> to add up to 30 options to your
                  poll, standard users can add a maximum of 15.
                </p>
              </PollChoicesMessage>
            ) : (
              <StyledButton
                $type="secondary"
                data-name="add-btn"
                type="button"
                onClick={addPollChoice}
              >
                Add another option
              </StyledButton>
            )}

            <Divider />

            <Flex gap="4rem">
              <SelectFieldGroup
                name="category"
                label="Poll Category"
                value={category}
                onChange={onChange}
                fullWidth
              >
                <option value="animals">Animals</option>
                <option value="art">Art</option>
                <option value="gaming">Gaming</option>
                <option value="music">Music</option>
                <option value="books">Books</option>
                <option value="cars">Cars</option>
                <option value="web-development">Web Development</option>
              </SelectFieldGroup>

              <SelectFieldGroup
                name="visibility"
                label="Poll Visibility"
                value={visibility}
                onChange={onChange}
                fullWidth
              >
                <option value="private">Private</option>
                <option value="public" disabled={!currentUser}>
                  {currentUser
                    ? 'Public'
                    : 'Public (Login to create public poll)'}
                </option>
              </SelectFieldGroup>
            </Flex>

            <Label>Poll Options</Label>

            <PollOptions>
              <PollOption
                name="loginToVote"
                label="Login to Vote"
                value={pollOptions.loginToVote}
                onChange={onPollOptionsChange}
              />

              <PollOption
                name="addComments"
                label="Add Comments"
                value={pollOptions.addComments}
                onChange={onPollOptionsChange}
              />

              <PollOption
                name="enableCaptcha"
                label="Enable Captcha"
                value={pollOptions.enableCaptcha}
                onChange={onPollOptionsChange}
              />

              <PollOption name="setEndDate" label="Set End Date" $pro />

              <PollOption
                name="hideSharing"
                label="Hide Sharing Options"
                $pro
              />
            </PollOptions>

            <Divider />

            <StyledButton $type="primary" type="submit">
             Save Changes
            </StyledButton>
          </form>

          <PollSecured>
            Poll secured using{' '}
            {pollOptions.loginToVote ? 'sessions' : 'cookies'} to stop duplicate
            votes being cast.
          </PollSecured>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

export default EditPoll;
