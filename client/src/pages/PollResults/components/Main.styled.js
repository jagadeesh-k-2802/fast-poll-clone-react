import styled from 'styled-components';
import iconPadlockDark from '../../../assets/icon-padlock-locked-dark.svg';
import iconReportFlag from '../../../assets/icon-report-flag.svg';

const Main = styled.main`
  padding-top: 8rem;

  @media screen and (max-width: 600px) {
    padding-top: 2rem;
  }

  h3.category {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.lightYellow};
    padding: 0.7rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    width: 60%;

    @media screen and (max-width: 800px) {
      width: 100%;
    }

    @media screen and (max-width: 600px) {
      font-size: 3.5rem;
    }
  }

  p {
    margin: 1rem 0;

    a,
    span {
      color: #333;
    }
  }

  span.private-notice {
    padding-left: 2.5rem;
    margin: 0 2rem;
    font-weight: 600;
    color: #717172;
    background-image: url('${iconPadlockDark}');
    background-repeat: no-repeat;
    background-position: left center;
  }

  button.report-btn {
    font-weight: 500;
    padding: 1rem 2.5rem;
    font-size: 1.4rem;
    color: #333;
    opacity: 0.5;
    background-color: transparent;
    letter-spacing: -0.23px;
    text-align: right;
    background-image: url('${iconReportFlag}');
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
    background-repeat: no-repeat;
    background-position: 2px 11px;

    @media screen and (max-width: 600px) {
      display: none;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export default Main;
