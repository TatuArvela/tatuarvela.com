import styled from "styled-components";
import {
  BACKGROUND_COLOR_1,
  FONT_SIZE_DEFAULT,
  PRIMARY,
  WHITE,
} from "styles/themeVariables";

const StyledSubmitButton = styled.button`
  align-self: flex-end;
  background: ${PRIMARY};
  border: none;
  color: ${WHITE};
  cursor: pointer;
  font-family: inherit;
  font-size: ${FONT_SIZE_DEFAULT};
  margin: 0;
  padding: 0.5em 0.75em;
  transition: background-color 0.2s;
  width: auto;

  &:hover,
  &:focus {
    background: ${BACKGROUND_COLOR_1};
    outline: none;
    text-decoration: none;
  }
`;

const ButtonLabel = styled.span`
  position: relative;
`;

const SubmitButton = ({ children, ...rest }) => (
  <StyledSubmitButton type="submit" {...rest}>
    <ButtonLabel>{children}</ButtonLabel>
  </StyledSubmitButton>
);

export default SubmitButton;
