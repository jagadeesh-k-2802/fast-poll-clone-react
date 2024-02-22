import Helmet from 'react-helmet';
import Main from './components/Main.styled';
import H1 from '../../components/Typography/H1.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import TextFieldGroup from '../../components/InputGroup/TextFieldGroup.styled';
import StyledButton from '../../components/Button/Button.styled';

const PasswordChange = ({
  currentPassword,
  newPassword,
  onChange,
  onSubmit
}) => {
  return (
    <>
      <Helmet>
        <title>Change Your Password | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <div>
          <H1>Change Password</H1>
          <p>Complete the below form to change your password</p>

          <form onSubmit={onSubmit}>
            <TextFieldGroup
              name="currentPassword"
              label="Current Password"
              value={currentPassword}
              onChange={onChange}
              type="password"
              fullWidth
            />

            <TextFieldGroup
              name="newPassword"
              label="New Password"
              placeholder="Minimum 6 characters"
              value={newPassword}
              onChange={onChange}
              type="password"
              fullWidth
            />

            <StyledButton $type="primary" type="submit">
              Change Password
            </StyledButton>
          </form>
        </div>
      </Main>

      <Footer />
    </>
  );
};

export default PasswordChange;
