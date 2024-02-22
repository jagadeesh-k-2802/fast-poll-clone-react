import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Main from './components/Main.styled';
import Flex from '../../components/Flex/Flex.styled';
import Form from '../../components/CenteredForm/CenteredForm.styled';
import FormFinalLine from '../../components/FormFinalLine/FormFinalLine.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import FormShape from '../../components/FormShape/FormShape.styled';
import Footer from '../../components/Footer/FooterContainer';
import TextField from '../../components/InputField/TextField.styled';
import H1 from '../../components/Typography/H1.styled';
import StyledButton from '../../components/Button/Button.styled';
import StyledCheckBox from '../../components/InputField/CheckBox.styled';

const SignUp = ({
  firstName,
  lastName,
  email,
  username,
  password,
  termsAgreed,
  onChange,
  onSubmit
}) => {
  return (
    <>
      <Helmet>
        <title>Create Your Account | Fast Poll</title>
      </Helmet>

      <NavBar />

      <Main>
        <FormShape>
          <Form onSubmit={onSubmit}>
            <H1>Sign Up</H1>
            <p>Complete the below form to create your account</p>

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

            <TextField
              placeholder="Username"
              type="text"
              name="username"
              fullWidth
              value={username}
              onChange={onChange}
            />

            <TextField
              placeholder="Password"
              type="password"
              name="password"
              fullWidth
              value={password}
              onChange={onChange}
            />

            <StyledCheckBox
              name="terms"
              value={termsAgreed}
              onChange={onChange}
              label={
                <>
                  I agree to the <Link to="/terms">terms of use</Link>
                </>
              }
            />

            <StyledButton $type="primary" $fullWidth type="submit">
              Sign Up
            </StyledButton>

            <FormFinalLine>
              Already a member? <Link to="/login">Login</Link>
            </FormFinalLine>
          </Form>
        </FormShape>
      </Main>

      <Footer />
    </>
  );
};

export default SignUp;
