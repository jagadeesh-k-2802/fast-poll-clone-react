import Label from './Label.styled';
import InputGroupWrapper from './InputGroupWrapper.styled';
import TextArea from '../InputField/TextArea.styled';

const TextAreaGroup = ({
  label,
  name,
  value,
  type,
  placeholder,
  fullWidth,
  height,
  onChange
}) => {
  return (
    <InputGroupWrapper>
      <Label htmlFor={name}>{label}</Label>
      <TextArea
        name={name}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        placeholder={placeholder}
        height={height}
        type={type}
      />
    </InputGroupWrapper>
  );
};

export default TextAreaGroup;
