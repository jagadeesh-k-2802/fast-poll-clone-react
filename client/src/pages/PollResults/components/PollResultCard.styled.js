import styled from 'styled-components';
import Flex from '../../../components/Flex/Flex.styled';

const PollResultCard = ({ vote, totalVote, first }) => {
  let percentage = parseInt((vote.voteCount / totalVote) * 100, 10);
  percentage = isNaN(percentage) ? 0 : percentage;

  return (
    <StyledPollResultCard color={vote.color} first={first}>
      <Flex justifyContent="space-between">
        <h3>{vote.name}</h3>
        <h3>{percentage}%</h3>
      </Flex>
      <Progress color={vote.color} percentage={percentage} />
      <span>{vote.voteCount} Votes</span>
    </StyledPollResultCard>
  );
};

const StyledPollResultCard = styled.div`
  padding: 3rem;
  background-color: #fff;
  box-shadow: 0 7px 14px 0 rgb(0 0 0 / 7%);
  border-radius: 5px;
  margin: 2rem 0;
  width: 100%;
  border: 2.5px solid ${({ first, color }) => (first ? color : 'transparent')};
  box-shadow: ${({ first, color }) => first && `0 7px 14px 0 ${color}48`};
  position: relative;

  @media screen and (max-width: 600px) {
    margin: 3rem 0;
  }

  h3 {
    font-size: 2.75rem;

    @media screen and (max-width: 600px) {
      &:last-child {
        font-size: 1.6rem;
        line-height: 1.5;
        position: absolute;
        right: -14px;
        top: -14px;
        background-color: #fff;
        box-shadow: 0 7px 14px 0 rgb(0 0 0 / 7%);
        border-radius: 50px;
        padding: 0.5rem 1.6rem;
        border: solid 2.5px #fff;
      }
    }
  }

  span {
    margin: 1rem 0;
    font-size: 1.4rem;
    color: #c1c1c1;
    font-weight: 500;
  }
`;

const Progress = styled.div`
  width: 100%;
  margin: 2rem 0;
  width: 100%;
  background-color: ${({ color }) => `${color}33`};
  height: 8px;
  border-radius: 5px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 8px;
    border-radius: 5px;
    background-color: ${({ color }) => color};
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
    width: ${({ percentage }) => `${percentage}%`};
  }
`;

export default PollResultCard;
