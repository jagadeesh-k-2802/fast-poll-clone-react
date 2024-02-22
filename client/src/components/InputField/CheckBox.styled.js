import styled from 'styled-components';
import iconChecked from '../../assets/icon-session-checkbox-checked.svg';
import iconUnchecked from '../../assets/icon-session-checkbox.svg';

const StyledCheckBox = ({ name, label, value, onChange }) => {
  return (
    <StyledCheckBoxContainer>
      <StyledInputCheckBox
        id={name}
        name={name}
        type="checkbox"
        value={value}
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
    top: -4.5px;
    left: 0;
    width: 27px;
    height: 27px;
    background-repeat: no-repeat;
    background-position: left center;
    background-image: url('${iconUnchecked}');
  }

  &:checked {
    content: '';
    width: 27px;
    height: 27px;
    position: absolute;
    top: -4.5px;
    left: 0;
    background-repeat: no-repeat;
    background-position: left center;
    background-image: url('${iconChecked}');
  }
`;

export default StyledCheckBox;
