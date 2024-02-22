import Label from './Label.styled';
import InputGroupWrapper from './InputGroupWrapper.styled';
import SelectField from '../InputField/SelectField.styled';

const SelectFieldGroup = ({
  label,
  name,
  value,
  fullWidth,
  onChange,
  children
}) => {
  return (
    <InputGroupWrapper>
      <Label htmlFor={name}>{label}</Label>
      <SelectField
        name={name}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        children={children}
      />
    </InputGroupWrapper>
  );
};

export default SelectFieldGroup;
