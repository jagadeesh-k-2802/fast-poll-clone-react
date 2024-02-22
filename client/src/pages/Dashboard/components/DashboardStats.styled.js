import styled from 'styled-components';

export const DashboardCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 0 10rem 0;
  gap: 2.25rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const DashboardCard = ({ img, count, text }) => {
  return (
    <StyledDashboardCard img={img}>
      <span />
      <h3>{count}</h3>
      <p>{text}</p>
    </StyledDashboardCard>
  );
};

const StyledDashboardCard = styled.div`
  background-color: #fff;
  padding: 5rem 3rem;
  box-shadow: 0px 7px 14px rgb(0 0 0 / 7%);
  text-align: center;
  width: 100%;

  span {
    display: inline-block;
    background-image: ${({ img }) => `url('${img}')`};
    background-size: 44px;
    width: 44px;
    height: 44px;
    background-repeat: no-repeat;
  }

  h3 {
    font-size: 7rem;
    margin: 3rem 0;

    @media screen and (max-width: 600px) {
      font-size:5rem;
    }
  }

  p {
    font-size: 1.5rem;
  }
`;
