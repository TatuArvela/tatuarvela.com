import { TextareaHTMLAttributes } from "react";
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
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({ id, label, ...rest }: TextAreaProps) => (
  <>
    <Label htmlFor={id} label={label} />
    <StyledTextArea name={id} id={id} {...rest} />
  </>
);

export default TextArea;
