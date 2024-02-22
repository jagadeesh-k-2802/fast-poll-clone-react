import { Helmet } from 'react-helmet';
import { HashLink } from 'react-router-hash-link';
import Main from './components/Main.styled';
import ProHeader from './components/ProHeader.styled';
import FeaturesSection from './components/FeaturesSection.styled';
import ImagePollsSection from './components/ImagePollsSection.styled';
import ClosePollsSection from './components/ClosePollsSection.styled';
import DraftSection from './components/DraftSection.styled';
import QuestionSection from './components/QuestionSection.styled';
import NavBar from '../../components/NavBar/NavBarContainer';
import NavBarScrolled from '../../components/NavBar/NavBarScrolled';
import Footer from '../../components/Footer/FooterContainer';
import StyledButton from '../../components/Button/Button.styled';

const Pro = ({ planOption, setPlanOption }) => {
  return (
    <>
      <Helmet>
        <title>Pro | Fast Poll</title>
      </Helmet>

      <NavBar extended />

      <NavBarScrolled>
        <StyledButton $type="secondary" as={HashLink} to="#plans">
          Go Pro
        </StyledButton>
        <StyledButton $type="pink" as={HashLink} to="#plans">
          Go Ad Free Pro
        </StyledButton>
      </NavBarScrolled>

      <Main>
        <ProHeader planOption={planOption} setPlanOption={setPlanOption} />
        <FeaturesSection />
        <ImagePollsSection />
        <ClosePollsSection />
        <DraftSection />
        <QuestionSection />
      </Main>

      <Footer />
    </>
  );
};

export default Pro;
