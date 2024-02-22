import styled from 'styled-components';

const AccountActions = styled.div`
  padding: 4rem;
  border-radius: 5px;
  background-color: #fff;
  margin: 5rem 0;
  box-shadow: 0 5px 7px 0 rgb(0 0 0 / 5%);

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  & > div {
    display: flex;

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  button,
  a {
    display: inline-block;
    font-size: 1.8rem;
    padding: 2rem;
    margin: 1.5rem 0;

    &:first-child {
      margin-right: 1.5rem;
    }
  }
`;

export default AccountActions;
