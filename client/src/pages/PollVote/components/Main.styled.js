import styled from 'styled-components';
import iconPadlockDark from '../../../assets/icon-padlock-locked-dark.svg';
import iconChevronRight from '../../../assets/icon-chevron-right.svg';

const Main = styled.main`
  padding-bottom: 10rem;

  h3.category {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.lightYellow};
    padding: 0.7rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 1rem;
  }

  & > h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
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

  div.footer {
    margin: 4rem 0;

    @media screen and (max-width: 600px) {
      flex-direction: column;

      button,
      a {
        width: 100%;
        text-align: center;
        border-radius: 5px;
        padding: 2rem;
      }
    }
  }

  a.result-link {
    padding: 2rem 4rem 2rem 2rem;
    font-size: 16px;
    color: #969696;
    font-weight: 600;
    background-image: url('${iconChevronRight}');
    background-repeat: no-repeat;
    background-position: center right 15px;
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

    @media screen and (max-width: 600px) {
      background-color: #f4f4f4;
      color: #868686;
      background-image: none;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  form {
    button {
      padding: 2rem 3rem;
      font-size: 1.75rem;
    }
  }
`;

export default Main;
