import Helmet from 'react-helmet';
import Main from './components/Main.styled';
import Flex from '../../components/Flex/Flex.styled';
import Form from '../../components/CenteredForm/CenteredForm.styled';
import SelectField from '../../components/InputField/SelectField.styled';
import TextField from '../../components/InputField/TextField.styled';
import TextArea from '../../components/InputField/TextArea.styled';
import FormShape from '../../components/FormShape/FormShape.styled';
import StyledButton from '../../components/Button/Button.styled';
import H1 from '../../components/Typography/H1.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';

const Contact = ({
  firstName,
  lastName,
  email,
  topic,
  feedback,
  onChange,
  onSubmit
}) => {
  return (
    <>
      <Helmet>
        <title>Contact | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <FormShape>
          <Form onSubmit={onSubmit}>
            <H1>Get in touch</H1>
            <p>Send us any questions, feedback or suggestions you might have</p>

            <SelectField
              name="topic"
              value={topic}
              onChange={onChange}
              fullWidth
            >
              <option value="general">General Question</option>
              <option value="teams">Team Information</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="pro-account">Pro Accounts</option>
            </SelectField>

            <Flex gap="4rem">
              <TextField
                placeholder="First Name"
                type="text"
                name="firstName"
                fullWidth
                value={firstName}
                onChange={onChange}
              />

              <TextField
                placeholder="Last Name"
                type="text"
                name="lastName"
                fullWidth
                value={lastName}
                onChange={onChange}
              />
            </Flex>

            <TextField
              placeholder="Email Address"
              type="email"
              name="email"
              fullWidth
              value={email}
              onChange={onChange}
            />

            <TextArea
              name="feedback"
              value={feedback}
              onChange={onChange}
              height="150px"
              placeholder="Enter your questions, feedback or suggestions…"
              fullWidth
            />

            <StyledButton type="submit" $type="primary" $fullWidth>
              Send Feedback
            </StyledButton>
          </Form>
        </FormShape>
      </Main>

      <Footer />
    </>
  );
};

export default Contact;
