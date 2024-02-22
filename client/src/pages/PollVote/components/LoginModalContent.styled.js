import { lighten } from 'polished';
import styled from 'styled-components';
import fastPollIcon from '../../../assets/fast-poll-icon.svg';

const LoginModalContent = styled.div`
  padding: 4rem;
  position: relative;

  .icon {
    background-image: url('${fastPollIcon}');
    width: 58px;
    height: 58px;
    margin-bottom: 2rem;
  }

  p {
    font-weight: 600;
  }

  form {
    margin: 2rem 0 8rem 0;

    button {
      font-size: 2rem;
      padding: 1.5rem 3rem;
      margin: 1rem 0;
    }

    a {
      color: #c1c1c1;
      transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
      font-size: 1.4rem;
      font-weight: 600;

      &:hover {
        color: #333;
      }
    }
  }

  .footer {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    display: inline-block;
    background-color: #f9f9f9;
    padding: 3rem 4rem;
    color: #808080;
    text-align: center;
    font-weight: 600;
    font-size: 1.6rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

    &:hover {
      background-color: ${({ theme }) => lighten(0.34, theme.colors.secondary)};
    }

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default LoginModalContent;
