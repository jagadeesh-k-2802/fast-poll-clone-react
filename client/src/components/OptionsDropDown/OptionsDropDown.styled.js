import { useState } from 'react';
import styled from 'styled-components';
import DropDown from '../DropDown/DropDown.styled';
import chevronDown from '../../assets/icon-chevron-down.svg';

// Custom dropdown with options
const OptionsDropDown = ({
  currentOption,
  options,
  bottom,
  right,
  onChange
}) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const showDropDown = () => setDropDownVisible(true);
  const closeDropDown = () => setDropDownVisible(false);

  return (
    <OptionsDropDownWrapper visible={dropDownVisible}>
      <button onClick={showDropDown}>
        {currentOption.replaceAll('-', ' ')}
      </button>

      <DropDown
        visible={dropDownVisible}
        onHide={closeDropDown}
        width="180px"
        bottom={bottom}
        right={right}
      >
        <DropDownContent>
          {options.map(option => (
            <DropDownOption
              key={option}
              active={currentOption === option}
              onClick={() => {
                onChange(option);
                setDropDownVisible(false);
              }}
              children={option.replaceAll('-', ' ')}
            />
          ))}
        </DropDownContent>
      </DropDown>
    </OptionsDropDownWrapper>
  );
};

const OptionsDropDownWrapper = styled.div`
  position: relative;
  display: inline;

  & > button {
    font-size: 1.5rem;
    background-color: ${({ visible }) => (visible ? '#fff' : '#f1f1f1')};
    transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};
    padding: 1.5rem 6rem 1.5rem 2rem;
    border-radius: 5px;
    text-transform: capitalize;
    color: #333;
    font-weight: 600;
    background-image: url(${chevronDown});
    background-repeat: no-repeat;
    background-position: right 20px top 19px;
  }
`;

const DropDownContent = styled.div`
  padding: 1.8rem 2rem;
`;

const DropDownOption = styled.button`
  display: inline-block;
  width: 100%;
  padding: 1rem 0.8rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  background-color: transparent;
  text-align: left;
  color: #585d75;
  color: ${({ active }) => active && '#4199ff'};
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

  &:hover {
    color: #4199ff;
  }
`;

export default OptionsDropDown;
