import { Link } from 'react-router-dom';
import styled from 'styled-components';
import H1 from '../../../components/Typography/H1.styled';
import StyledButton from '../../../components/Button/Button.styled';
import Container from '../../../components/Container/Container.styled';

const QuestionSection = () => {
  return (
    <StyledQuestionSection>
      <Container>
        <H1>Do you have questions?</H1>

        <p>
          If you have any questions around our pro features or plans, please get
          in touch.
        </p>

        <StyledButton to="/contact" as={Link} $type="secondary">
          Speak to the team
        </StyledButton>
      </Container>
    </StyledQuestionSection>
  );
};

const StyledQuestionSection = styled.section`
  background-color: #ebeef3;
  padding: 10rem 0;
  font-weight: 600;

  h1 {
    font-size: 5rem;

    @media screen and (max-width: 600px) {
      font-size: 3.25rem;
    }
  }

  p {
    font-size: 1.8rem;
    margin: 2.5rem 0;
  }

  a {
    padding: 2rem 3rem;
  }
`;

export default QuestionSection;
