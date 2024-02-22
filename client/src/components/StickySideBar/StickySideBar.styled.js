import styled from 'styled-components';

// Used in brand and support screens
const StickySideBar = styled.div`
  background-color: #fff;
  position: sticky;
  top: 20px;
  padding: 2rem 4rem;
  margin-top: 4rem;
  min-width: 200px;
  box-shadow: 0 7px 14px 0 rgb(0 0 0 / 7%);

  @media screen and (max-width: 720px) {
    width: 100%;
    position: static;
  }

  a {
    display: inline-block;
    padding: 1rem 0;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    color: inherit;

    &.active,
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default StickySideBar;
