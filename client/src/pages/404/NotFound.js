import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Main from './components/Main.styled';
import ErrorWrapper from './components/ErrorWrapper.styled';
import H1 from '../../components/Typography/H1.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import Footer from '../../components/Footer/FooterContainer';
import StyledButton from '../../components/Button/Button.styled';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Not Found | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <Main>
        <ErrorWrapper>
          <H1>
            Sorry that page <br /> cannot be found
          </H1>
          <StyledButton $type="primary" as={Link} to="/">
            Home
          </StyledButton>
        </ErrorWrapper>
      </Main>

      <Footer />
    </>
  );
};

export default NotFoundPage;
