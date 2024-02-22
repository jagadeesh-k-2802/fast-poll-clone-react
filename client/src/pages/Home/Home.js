import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Main from './components/Main.styled';
import HeroSection from './components/HeroSection.styled';
import RealTimeSection from './components/RealTimeSection.styled';
import InteractSection from './components/InteractSection.styled';
import ControlSection from './components/ControlSection.styled';
import SharingSection from './components/SharingSection.styled';
import FeaturesSection from './components/FeaturesSection.styled';
import ProSection from './components/ProSection.styled';
import GetStartedSection from './components/GetStartedSection.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import NavBarScrolled from '../../components/NavBar/NavBarScrolled';
import Footer from '../../components/Footer/FooterContainer';
import StyledButton from '../../components/Button/Button.styled';

const Home = ({ currentUser }) => {
  return (
    <>
      <Helmet>
        <title>Fast Poll</title>
      </Helmet>

      <NavBar />

      <NavBarScrolled>
        <StyledButton $type="primary" to="/new" as={Link}>
          Create Poll
        </StyledButton>

        {!currentUser && (
          <StyledButton $type="secondary" to="/sign-up" as={Link}>
            Sign Up
          </StyledButton>
        )}
      </NavBarScrolled>

      <Main>
        <HeroSection />
        <RealTimeSection />
        <InteractSection />
        <ControlSection />
        <SharingSection />
        <FeaturesSection />
        <ProSection />
        <GetStartedSection currentUser={currentUser} />
      </Main>

      <Footer />
    </>
  );
};

export default Home;
