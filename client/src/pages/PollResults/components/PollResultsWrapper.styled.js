import styled from 'styled-components';

const PollResultsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

  & > div:first-child {
    flex: 2;
    width: 100%;
  }

  & > div:last-child {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 2rem 0;
    width: 100%;

    @media screen and (max-width: 600px) {
      flex-direction: column-reverse;
      border-top: 1.6px solid #f4f4f4;
      position: fixed;
      bottom: 0px;
      left: 0px;
      width: 100%;
      background-color: #fff;
      height: 165px;
      padding: 2rem;
      margin: 0;
      z-index: 60;
    }

    div {
      width: 100%;
    }

    & > a {
      padding: 2rem;
      font-size: 2rem;

      @media screen and (max-width: 600px) {
        padding: 1.6rem;
        font-size: 1.8rem;
      }
    }
  }
`;

export default PollResultsWrapper;
