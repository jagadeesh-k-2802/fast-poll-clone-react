import styled from 'styled-components';

// Shown when 15 choices are exceeded
const PollChoicesMessage = styled.div`
  background-color: #e8f5ff;
  margin: 3rem 0;
  padding: 2.5rem;
  border-radius: 5px;
  font-weight: 500;

  p {
    color: #61859e;
  }

  a {
    font-weight: 700;
    color: #37617b;
  }
`;

export default PollChoicesMessage;
