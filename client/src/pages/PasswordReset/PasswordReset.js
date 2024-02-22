import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Main from './components/Main.styled';
import FormShape from '../../components/FormShape/FormShape.styled';
import Form from '../../components/CenteredForm/CenteredForm.styled';
import TextField from '../../components/InputField/TextField.styled';
import FormFinalLine from '../../components/FormFinalLine/FormFinalLine.styled';
import H1 from '../../components/Typography/H1.styled';
import StyledButton from '../../components/Button/Button.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';

const PasswordReset = ({
  token,
  email,
  password,
  confirmPassword,
  passwordChanged,
  onChange,
  onSubmit
}) => {
  return (
    <>
      <Helmet>
        <title>Password Reset | Fast Poll</title>
      </Helmet>

      <NavBar />

      <Main>
        <FormShape>
          <Form onSubmit={onSubmit}>
            {passwordChanged ? (
              <>
                <H1>Password Changed</H1>
                <p>Your password has now been successfully changed.</p>
                <StyledButton
                  style={{ color: '#fff' }}
                  as={Link}
                  to="/login"
                  $type="secondary"
                >
                  Login
                </StyledButton>
              </>
            ) : !token ? (
              <>
                <H1>Password Reset</H1>
                <p>Complete the below form to reset your password</p>

                <TextField
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />

                <StyledButton $type="primary" $fullWidth type="submit">
                  Reset Password
                </StyledButton>

                <FormFinalLine>
                  Back to <Link to="/login">login</Link>
                </FormFinalLine>
              </>
            ) : (
              <>
                <H1>Password Reset</H1>
                <p>Complete the below form to reset your password</p>

                <TextField
                  placeholder="New Password"
                  type="password"
                  name="password"
                  fullWidth
                  value={password}
                  onChange={onChange}
                />

                <TextField
                  placeholder="Confirm New Password"
                  type="password"
                  name="confirmPassword"
                  fullWidth
                  value={confirmPassword}
                  onChange={onChange}
                />

                <StyledButton $type="primary" $fullWidth type="submit">
                  Change Password
                </StyledButton>
              </>
            )}
          </Form>
        </FormShape>
      </Main>

      <Footer />
    </>
  );
};

export default PasswordReset;
