import styled from 'styled-components';
import iconAboutCommit from '../../../assets/icon-about-commit.svg';

const TextBlock = styled.div`
  padding-bottom: 10rem;

  ul {
    list-style-image: url('${iconAboutCommit}');
    padding-left: 2.8rem;
    margin: 2rem 0;
  }

  & > h2 {
    font-size: 3.25rem;
    margin-bottom: 1rem;
  }

  & > h3 {
    color: ${({ theme }) => theme.colors.purple};
    font-size: 1.8rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 720px) {
      font-size: 1.6rem;
    }
  }

  & > p,
  li {
    font-size: 2rem;
    padding-bottom: 2rem;
    line-height: 1.5;
    color: #a6a9ae;

    @media screen and (max-width: 720px) {
      font-size: 1.7rem;
    }
  }

  a {
    color: #333;
  }
`;

export default TextBlock;
