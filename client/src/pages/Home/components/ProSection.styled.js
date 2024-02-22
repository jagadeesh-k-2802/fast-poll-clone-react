import styled from 'styled-components';
import StyledButton from '../../../components/Button/Button.styled';
import H1 from '../../../components/Typography/H1.styled';
import proShapeOne from '../../../assets/pro-shape-1.svg';
import proBrowserWindow from '../../../assets/pro-browser-window.png';
import { Link } from 'react-router-dom';

const ProSection = () => {
  return (
    <StyledProSection>
      <Wrapper>
        <Left>
          <h3>Fast Poll</h3>
          <H1>Pro</H1>

          <ul>
            <li>Add images to polls</li>
            <li>Set auto end date for a poll</li>
            <li>Save as draft option</li>
            <li>Remove Ads</li>
            <li>Pro badge on your profile</li>
          </ul>

          <StyledButton $type="brown" as={Link} to="/pro">
            Discover Pro
          </StyledButton>
        </Left>

        <Right>
          <img
            src={proBrowserWindow}
            alt="Browser window showing a pro poll with images"
          />
        </Right>
      </Wrapper>
    </StyledProSection>
  );
};

const StyledProSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 1200px;

  @media screen and (max-width: 780px) {
    padding: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  width: 100%;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }

  background-color: #ffe8db;
  box-shadow: 0px 12px 34px rgb(237 212 203 / 40%);
  border-radius: 10px;
  overflow: hidden;
  min-height: 636px;
  position: relative;
  margin-bottom: 100px;
  background-image: url('${proShapeOne}');
  background-repeat: no-repeat;
  background-size: 950px;
  background-position: right -80px top -260px;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    align-items: center;
    text-align: center;
    padding: 4rem;
  }

  h3 {
    color: #d6967e;
    font-size: 2rem;
  }

  h1 {
    color: #2e0f06;
    font-size: 8rem;
    margin: 2rem 0;
  }

  ul {
    list-style-type: none;

    li {
      font-size: 1.8rem;
      color: #c59c8d;
      font-weight: 500;
      margin: 2rem 0;
    }
  }
`;

const Right = styled.div`
  position: absolute;
  width: 950px;
  right: -220px;
  top: 30px;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    width: 55%;
    right: -100px;

    img {
      width: 900px;
    }
  }

  @media screen and (max-width: 780px) {
    width: 100%;
    position: static;
  }
`;

export default ProSection;
