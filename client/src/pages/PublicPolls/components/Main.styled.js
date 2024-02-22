import styled from 'styled-components';

const Main = styled.main`
  padding: 10rem 0;

  @media screen and (max-width: 850px) {
    padding: 5rem 0;

    div.polls-header {
      flex-direction: column;

      .dropdown {
        left: 0px;
        bottom: -160px;
      }

      h1 {
        font-size: 3.6rem;
      }
    }
  }
`;

export default Main;
