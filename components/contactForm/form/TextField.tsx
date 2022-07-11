import styled from "styled-components";
import { inputStyle } from "styles/inputStyle";

import Label from "./Label";

const StyledTextField = styled.input`
  ${inputStyle};
`;

type TextFieldProps = {
  id: string;
  label: string;
} & typeof StyledTextField.props;

const TextField = ({ id, label, ...rest }: TextFieldProps) => (
  <>
    <Label htmlFor={id} label={label} />
    <StyledTextField type="text" name={id} id={id} {...rest} />
  </>
);

export default TextField;
