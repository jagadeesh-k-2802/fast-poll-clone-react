import styled from 'styled-components';

const Main = styled.main`
  padding: 10rem 0;

  div.polls-header {
    @media screen and (max-width: 850px) {
      flex-direction: column;

      .dropdown {
        left: 0px;
        bottom: -130px;
      }
    }
  }
`;

export default Main;
