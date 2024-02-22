import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import H1 from '../../../components/Typography/H1.styled';
import StyledButton from '../../../components/Button/Button.styled';
import facebookLogo from '../../../assets/home-logo-facebook.svg';
import amazonLogo from '../../../assets/home-logo-amazon.svg';
import linkedinLogo from '../../../assets/home-logo-linkedin.svg';
import htcLogo from '../../../assets/home-logo-htc.svg';
import whatsappLogo from '../../../assets/home-logo-whatsapp.svg';
import mailchimpLogo from '../../../assets/home-logo-mailchimp.svg';

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <Wrapper>
        <H1>
          Create instant, real-time <strong>polls</strong> for{' '}
          <Typewriter
            words={['work', 'fun', 'feedback', 'engagement', 'free']}
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </H1>

        <StyledButton $type="primary" as={Link} to="/new">
          Create your poll
        </StyledButton>

        <p>
          No registration required, it’s 100% free and takes less than a minute.
        </p>
      </Wrapper>

      <Brands>
        <p>Used by the best</p>

        <ul>
          <li className="facebook-logo">
            <img src={facebookLogo} alt="facebook-logo" />
          </li>
          <li className="amazon-logo">
            <img src={amazonLogo} alt="amazon-logo" />
          </li>
          <li className="linkedin-logo">
            <img src={linkedinLogo} alt="linkedin-logo" />
          </li>
          <li className="htc-logo">
            <img src={htcLogo} alt="htc-logo" />
          </li>
          <li className="whatsapp-logo">
            <img src={whatsappLogo} alt="whatsapp-logo" />
          </li>
          <li className="mailchimp-logo">
            <img src={mailchimpLogo} alt="mailchimp-logo" />
          </li>
        </ul>
      </Brands>
    </StyledHeroSection>
  );
};

const StyledHeroSection = styled.section`
  height: 100vh;
  max-height: 1150px;
  min-height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14rem;
  position: relative;

  h1 {
    font-size: 6rem;
    text-align: center;

    @media screen and (max-width: 600px) {
      font-size: 3.75rem;
    }

    strong {
      color: ${({ theme }) => theme.colors.primary};
    }

    span {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 7px;
        background-color: ${({ theme }) => theme.colors.lightYellow};
        transform: rotate(178deg) skew(25deg);
        border-radius: 20px;
      }
    }
  }

  p {
    font-size: 1.25rem;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    max-width: 700px;
  }

  a {
    padding: 2rem 3rem;
    font-size: 2rem;
    margin: 3rem 0;
  }
`;

export const Brands = styled.div`
  position: absolute;
  bottom: 150px;

  p {
    text-align: center;
    margin: 1.25rem 0;
    font-weight: 500;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;

    li {
      display: inline-block;
      margin: 0 2rem;

      @media screen and (max-width: 900px) {
        &.mailchimp-logo {
          display: none;
        }
      }

      @media screen and (max-width: 800px) {
        &.linkedin-logo,
        &.htc-logo {
          display: none;
        }
      }

      img {
        width: 100%;

        &[alt='amazon-logo'] {
          margin-top: 10px;
        }
      }
    }
  }
`;

export default HeroSection;
