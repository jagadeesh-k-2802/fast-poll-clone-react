import styled from 'styled-components';

const Main = styled.main`
  padding: 10rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    max-width: 600px;

    h1 {
      font-size: 4.5rem;
    }

    p {
      margin: 1.8rem 0;
      line-height: 1.2;
    }

    button {
      padding: 2.5rem;
      font-size: 2rem;
    }
  }
`;

export default Main;
