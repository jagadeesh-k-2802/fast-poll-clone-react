import { Helmet } from 'react-helmet';
import Main from './components/Main.styled';
import H1 from '../../components/Typography/H1.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import StyledButton from '../../components/Button/Button.styled';
import Container from '../../components/Container/Container.styled';

const DeleteAccountPage = ({ onDelete }) => {
  return (
    <>
      <Helmet>
        <title>Delete Account | Fast Poll</title>
      </Helmet>

      <NavBar />

      <Main>
        <Container>
          <H1>Delete My Account?</H1>
          <p>
            This is permenant and once your account is deleted it cannot be
            recovered, we will delete all associated data with your account
            polls, poll votes and all your personal info.
          </p>
          <p>
            If you delete your account your data will be immediately deleted and
            you will be logged out.
          </p>
          <StyledButton $type="danger" onClick={onDelete}>
            Delete My Account
          </StyledButton>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

export default DeleteAccountPage;
