import styled from 'styled-components';

const Main = styled.main`
  padding: 10rem 0;

  @media screen and (max-width: 600px) {
    padding-bottom: 5rem;
  }

  h1 {
    margin-bottom: 8rem;
  }

  @media screen and (max-width: 600px) {
    padding: 5rem 0;

    h1 {
      margin-bottom: 4rem;
      font-size: 3rem;
    }
  }
`;

export default Main;
