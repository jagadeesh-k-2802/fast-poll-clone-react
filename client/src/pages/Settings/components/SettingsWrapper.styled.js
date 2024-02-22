import styled from 'styled-components';

const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }

  img {
    height: 80px;
    width: 80px;
    border-radius: 5px;
    margin-bottom: 2rem;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media screen and (max-width: 600px) {
      display: none;
    }

    button {
      padding: 1rem;
      font-size: 1.4rem;
    }
  }
`;

export default SettingsWrapper;
