import styled from 'styled-components';

const ReportModalContent = styled.div`
  padding: 4rem;
  width: 500px;

  @media screen and (max-width: 600px) {
    width: auto;
    padding: 3rem;

    h1 {
      font-size: 3rem;
    }
  }

  p {
    line-height: 1.3;
    margin: 1.5rem 0;

    @media screen and (max-width: 600px) {
      font-size: 1.4rem;
    }
  }

  button {
    padding: 1.75rem 2.5rem;
  }
`;

export default ReportModalContent;
