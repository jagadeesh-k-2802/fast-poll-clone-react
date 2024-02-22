import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import styled from 'styled-components';
import DropDown from '../DropDown/DropDown.styled';
import TextFieldGroup from '../InputGroup/TextFieldGroup.styled';
import colorsList from '../../data/colorsList';

const PollChoiceTextField = ({
  label,
  name,
  placeholder,
  color,
  value,
  onChange,
  onColorChange
}) => {
  return (
    <StyledPollChoiceTextField>
      <TextFieldGroup
        label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        fullWidth
      />

      <PollOptionGroup>
        <AddImage />
        <ColorPicker color={color} onColorChange={onColorChange} />
      </PollOptionGroup>
    </StyledPollChoiceTextField>
  );
};

const StyledPollChoiceTextField = styled.div`
  position: relative;
`;

const PollOptionGroup = styled.div`
  position: absolute;
  right: 25px;
  top: 44px;
  display: flex;
  gap: 0.8rem;
`;

const AddImage = () => {
  return (
    <StyledLink tabIndex={-1} to="/pro">
      Add Image
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: #597da7;
  background-color: #d9eeff;
  display: inline-block;
  padding: 0.75rem;
  border-radius: 5px;
  font-weight: 600;
`;

const ColorPicker = ({ color, onColorChange }) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const showDropDown = () => setDropDownVisible(true);
  const closeDropDown = () => setDropDownVisible(false);

  return (
    <ColorPickerWrapper color={color}>
      <button tabIndex={-1} type="button" onClick={showDropDown}>
        <span />
      </button>

      <DropDown
        visible={dropDownVisible}
        onHide={closeDropDown}
        width="200px"
        top="-260px"
        right="-50px"
      >
        <DropDownContent>
          <h3>Option Colour</h3>
          <p>
            Choose a colour for your poll option, this will be shown on your
            poll results page.
          </p>

          <ColorList>
            {colorsList.map(color => (
              <ColorItem
                key={color}
                color={color}
                onClick={() => onColorChange(color)}
                type="button"
              />
            ))}
          </ColorList>
        </DropDownContent>
      </DropDown>
    </ColorPickerWrapper>
  );
};

const ColorItem = styled.button`
  display: inline-block;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: ${({ color }) => color};
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

  &:hover {
    opacity: 0.8;
  }
`;

const ColorList = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
`;

const DropDownContent = styled.div`
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;

const ColorPickerWrapper = styled.div`
  position: relative;
  transition: ${({ theme }) => `all ${theme.transistion.duration}ms`};

  & > button {
    background-color: ${({ color }) => lighten(0.12, color)};
    padding: 0.75rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: inherit;

    span {
      height: 12px;
      width: 12px;
      background-color: ${({ color }) => color};
      transition: inherit;
      display: inline-block;
      border-radius: 50%;
    }
  }
`;

export default PollChoiceTextField;
