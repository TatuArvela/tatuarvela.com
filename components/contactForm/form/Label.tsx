import styled from "styled-components";
import { FONT_SIZE_SECONDARY } from "styles/themeVariables";

const StyledLabel = styled.label`
  display: inline-block;
  font-size: ${FONT_SIZE_SECONDARY};
  margin-bottom: 0.5rem;
`;

type LabelProps = {
  htmlFor: string;
  label: string;
};

const Label = ({ htmlFor, label }: LabelProps) => (
  <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
);

export default Label;
