import styled from 'styled-components';
import Container from '../../../components/Container/Container.styled';
import H1 from '../../../components/Typography/H1.styled';
import Flex from '../../../components/Flex/Flex.styled';
import CustomToggler from '../../../components/CustomToggler/CustomToggler.styled';
import StyledButton from '../../../components/Button/Button.styled';
import homeShape4 from '../../../assets/home-shape-4.svg';

const ProHeader = ({ planOption, setPlanOption }) => {
  return (
    <StyledProHeader id="plans">
      <Container>
        <ProHeaderText>
          <h3>Go Pro</h3>
          <H1>Simple Pricing</H1>
        </ProHeaderText>

        <Flex justifyContent="center">
          <CustomToggler
            leftOption="Pay Monthly"
            rightOption="Pay Annually"
            value={planOption}
            onChange={setPlanOption}
          />
        </Flex>

        <ProHeaderCards>
          <StyledPlanCard>
            <h3>Pro</h3>

            <h2>
              {planOption === 'Pay Monthly' ? (
                <>
                  $4<span>/mo</span>
                </>
              ) : (
                <>
                  $39<span>/yearly</span>
                </>
              )}
            </h2>

            {planOption === 'Pay Annually' && <h4>Save $9</h4>}

            <ul>
              <li>Add images to polls</li>
              <li>Set auto end date for a poll</li>
              <li>Save as draft option</li>
              <li>Add more than 15 options to your poll</li>
              <li>Ads are hidden for you</li>
              <li>Pro badge on your profile</li>
            </ul>

            <StyledButton $type="secondary" $fullWidth>
              Go Pro
            </StyledButton>
          </StyledPlanCard>

          <StyledPlanCard inverted>
            <h3>Ad Free Pro</h3>

            <h2>
              {planOption === 'Pay Monthly' ? (
                <>
                  $34<span>/mo</span>
                </>
              ) : (
                <>
                  $199<span>/yearly</span>
                </>
              )}
            </h2>

            {planOption === 'Pay Annually' && <h4>Save $209</h4>}

            <p>
              <strong>
                Ads are hidden for you and everyone visiting your polls.
              </strong>
            </p>

            <ul>
              <li>
                <strong>Plus all Pro features -</strong>
              </li>
              <li>Add images to polls</li>
              <li>Set auto end date for a poll</li>
              <li>Save as draft option</li>
              <li>Add more than 15 options to your poll</li>
              <li>Ads are hidden for you</li>
              <li>Pro badge on your profile</li>
            </ul>

            <StyledButton $type="pink" $fullWidth>
              Go Ad Free Pro
            </StyledButton>
          </StyledPlanCard>
        </ProHeaderCards>
      </Container>
    </StyledProHeader>
  );
};

const StyledProHeader = styled.div`
  background-color: #f9f7ff;
  text-align: center;
  padding: 10rem 0;
  margin-bottom: 10rem;

  div {
    z-index: 10;
  }

  &::after {
    background-image: url('${homeShape4}');
    background-repeat: no-repeat;
    background-size: 790px;
    position: absolute;
    width: 790px;
    height: 790px;
    top: 190px;
    right: -50px;
    z-index: 1;
    content: '';
  }
`;

export const ProHeaderText = styled.div`
  position: relative;
  z-index: 8;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.lightPurple};
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 5.5rem;
    color: #222831;
    max-width: 600px;

    @media screen and(max-width:800px) {
    }
  }
`;

const ProHeaderCards = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  gap: 4rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledPlanCard = styled.div`
  width: 350px;
  color: ${({ inverted }) => (inverted ? '#fff' : '#333')};
  background: ${({ inverted }) => (inverted ? '#292634' : '#fff')};
  box-shadow: 0px 4px 8px rgb(227 223 239 / 60%);
  border-radius: 5px;
  padding: 3.5rem;
  text-align: left;
  position: relative;
  z-index: 5;

  strong {
    color: ${({ inverted }) => (inverted ? '#fff' : '#333')};
  }

  h3 {
    color: ${({ inverted, theme }) =>
      inverted ? theme.colors.pink : theme.colors.warning};
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.7rem;
    margin: 2rem 0;
  }

  h2 {
    font-size: 5rem;
    margin-bottom: 2rem;

    span {
      font-weight: 500;
      color: #b1b1b1;
      font-size: 2rem;
    }
  }

  ul {
    margin: 2rem 0;
    list-style-type: none;

    li {
      padding: 1rem 0;
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ inverted }) => (inverted ? '#BAB6C9' : '#979797')};
    }
  }
`;

export default ProHeader;
