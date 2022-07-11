import styled from "styled-components";

import { inputStyle } from "../../../styles/inputStyle";
import Label from "./Label";

const StyledTextArea = styled.textarea`
  ${inputStyle};
  min-height: 6rem;
`;

type TextAreaProps = {
  id: string;
  label: string;
} & typeof StyledTextArea.props;

const TextArea = ({ id, label, ...rest }: TextAreaProps) => (
  <>
    <Label htmlFor={id} label={label} />
    <StyledTextArea type="text" name={id} id={id} {...rest} />
  </>
);

export default TextArea;
