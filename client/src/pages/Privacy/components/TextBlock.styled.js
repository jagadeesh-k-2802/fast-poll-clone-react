import styled from 'styled-components';

const TextBlock = styled.div`
  padding-bottom: 10rem;

  @media screen and (max-width: 600px) {
    padding-bottom: 5rem;
  }

  ul {
    padding-left: 2.8rem;

    @media screen and (max-width: 600px) {
      padding-left: 2.2rem;
    }
  }

  p,
  li {
    font-size: 2.4rem;
    color: #898989;
    padding-bottom: 2rem;
    line-height: 1.35;

    @media screen and (max-width: 600px) {
      font-size: 1.9rem;
      line-height: 1.5;
    }
  }

  a {
    color: #333;
  }
`;

export default TextBlock;
