import styled from 'styled-components';

const CustomToggler = ({ leftOption, rightOption, value, onChange }) => {
  const toggle = () => {
    value === leftOption ? onChange(rightOption) : onChange(leftOption);
  };

  return (
    <StyledCustomToggler>
      <button data-active={leftOption === value}>{leftOption}</button>
      <ToggleWrapper onClick={toggle}>
        <ToggleCircle active={value === rightOption} />
      </ToggleWrapper>
      <button data-active={rightOption === value}>{rightOption}</button>
    </StyledCustomToggler>
  );
};

const StyledCustomToggler = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    border: 0;
    background-color: transparent;
    font-size: 1.5rem;
    color: #afa4d1;
    font-weight: 600;

    &[data-active='true'] {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`;

const ToggleWrapper = styled.div`
  display: inline-block;
  width: 56px;
  height: 32px;
  background: #ff6f97;
  box-shadow: inset 0px 0px 4px rgb(0 0 0 / 13%);
  border-radius: 100px;
  cursor: pointer;
  position: relative;
`;

const ToggleCircle = styled.div`
  height: 26px;
  width: 26px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 50px;
  cursor: pointer;
  position: absolute;
  left: ${({ active }) => (active ? '27px' : '3px')};
  top: 3px;
  transition: ${({ theme }) =>
    `${theme.transistion.duration}ms left cubic-bezier(0.75, 0, 0, 1)`};
`;

export default CustomToggler;
