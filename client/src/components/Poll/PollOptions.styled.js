import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconChecked from '../../assets/create-poll-checkbox-active.svg';
import iconUnchecked from '../../assets/create-poll-checkbox.svg';

const CheckBox = ({ name, label, value, onChange }) => {
  return (
    <StyledCheckBoxContainer>
      <StyledInputCheckBox
        id={name}
        name={name}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </StyledCheckBoxContainer>
  );
};

const StyledCheckBoxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 1.6rem 0;

  label {
    margin-left: 4rem;
    height: 10px;
    cursor: pointer;
    color: #333;
  }

  a {
    color: ${({ theme }) => theme.colors.navy};
  }
`;

const StyledInputCheckBox = styled.input`
  color: #333;
  -webkit-appearance: none;
  cursor: pointer;
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

  &:not(:checked) {
    content: '';
    position: absolute;
    left: 0;
    top: -13px;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-position: left center;
    background-image: url('${iconUnchecked}');
  }

  &:checked {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    left: 0;
    top: -13px;
    background-repeat: no-repeat;
    background-position: left center;
    background-image: url('${iconChecked}');
  }
`;

export const PollOptions = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
`;

const StyledPollOption = styled.div`
  padding: 0.8rem 2rem;
  color: #5f5f5f;
  font-weight: 500;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  position: relative;

  &::after {
    display: ${({ $pro }) => ($pro ? 'inline-block' : 'none')};
    content: 'PRO';
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #ff946b;
    font-size: 0.9rem;
    color: #fff;
    font-weight: 600;
    padding: 0.5rem;
    border-radius: 5px;
  }
`;

export const PollOption = ({ name, label, value, $pro, onChange }) => {
  return $pro ? (
    <StyledPollOption as={Link} to="/pro" $pro={$pro}>
      <CheckBox name={name} label={label} value={value} onChange={onChange} />
    </StyledPollOption>
  ) : (
    <StyledPollOption>
      <CheckBox name={name} label={label} value={value} onChange={onChange} />
    </StyledPollOption>
  );
};
