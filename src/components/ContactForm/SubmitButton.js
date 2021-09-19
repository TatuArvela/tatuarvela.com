import * as React from 'react';
import styled from 'styled-components';
import { FONT_SIZE_DEFAULT, PRIMARY, BACKGROUND_COLOR_1, WHITE } from '../../theme';

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

const SubmitButton = (props) => (
  <StyledSubmitButton type="submit" {...props}>
    <ButtonLabel>Send</ButtonLabel>
  </StyledSubmitButton>
);

export default SubmitButton;
