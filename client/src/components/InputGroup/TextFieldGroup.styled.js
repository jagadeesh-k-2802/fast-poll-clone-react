import Label from './Label.styled';
import InputGroupWrapper from './InputGroupWrapper.styled';
import TextField from '../InputField/TextField.styled';

const TextFieldGroup = ({
  label,
  name,
  value,
  type,
  readOnly,
  placeholder,
  backgroundColor,
  fullWidth,
  onChange
}) => {
  return (
    <InputGroupWrapper>
      <Label htmlFor={name}>{label}</Label>
      <TextField
        name={name}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        placeholder={placeholder}
        backgroundColor={backgroundColor}
        type={type}
        readOnly={readOnly}
      />
    </InputGroupWrapper>
  );
};

export default TextFieldGroup;
