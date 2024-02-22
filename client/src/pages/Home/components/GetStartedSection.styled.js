import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledButton from '../../../components/Button/Button.styled';
import H1 from '../../../components/Typography/H1.styled';

const GetStartedSection = ({ currentUser }) => {
  return (
    <StyledGetStartedSection>
      <H1>Get Started</H1>

      {!currentUser ? (
        <>
          <p>Create a free account and start creating polls instantly.</p>

          <StyledButton as={Link} to="/sign-up" $type="secondary">
            Sign Up
          </StyledButton>
        </>
      ) : (
        <>
          <p>
            Start creating polls instantly, it’s 100% free and takes less than a
            minute.
          </p>

          <StyledButton as={Link} to="/new" $type="secondary">
            Create your poll
          </StyledButton>
        </>
      )}
    </StyledGetStartedSection>
  );
};

const StyledGetStartedSection = styled.section`
  text-align: center;
  padding: 10rem;
  background-color: ${({ theme }) => theme.colors.bgLightGray};

  @media screen and (max-width: 600px) {
    padding: 6rem;
  }

  h1 {
    font-size: 6rem;

    @media screen and (max-width: 800px) {
      font-size: 4rem;
    }
  }

  p {
    margin: 2rem 0;
    font-size: 1.8rem;
  }

  a {
    margin: 1.2rem 0;
    padding: 2.4rem;
    font-size: 2rem;
  }
`;

export default GetStartedSection;
