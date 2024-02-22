import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Main from './components/Main.styled';
import FormShape from '../../components/FormShape/FormShape.styled';
import Form from '../../components/CenteredForm/CenteredForm.styled';
import FormFinalLine from '../../components/FormFinalLine/FormFinalLine.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import TextField from '../../components/InputField/TextField.styled';
import H1 from '../../components/Typography/H1.styled';
import StyledButton from '../../components/Button/Button.styled';

const Login = ({ email, password, onSubmit, onChange }) => {
  return (
    <>
      <Helmet>
        <title>Login | Fast Poll</title>
      </Helmet>

      <NavBar />

      <Main>
        <FormShape>
          <Form onSubmit={onSubmit}>
            <H1>Login</H1>
            <p>Securely login to your Fast Poll account</p>

            <TextField
              placeholder="Email Address"
              type="email"
              name="email"
              fullWidth
              value={email}
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

            <StyledButton $type="primary" $fullWidth type="submit">
              Login
            </StyledButton>

            <FormFinalLine>
              Forgot your password? You can{' '}
              <Link to="/password-reset">reset it here</Link>
            </FormFinalLine>
          </Form>
        </FormShape>
      </Main>

      <Footer />
    </>
  );
};

export default Login;
