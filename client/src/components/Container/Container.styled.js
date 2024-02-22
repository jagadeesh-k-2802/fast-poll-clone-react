import styled from 'styled-components';

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth};

  &.large {
    width: 1024px;

    @media screen and (max-width: 1080px) {
      width: 90%;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export default Container;
