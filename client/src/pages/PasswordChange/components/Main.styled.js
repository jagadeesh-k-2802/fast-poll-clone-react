import styled from 'styled-components';

const Main = styled.main`
  padding: 10rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 500px;

    form {
      button {
        padding: 2rem 3rem;
        font-size: 2rem;
      }
    }
  }
`;

export default Main;
