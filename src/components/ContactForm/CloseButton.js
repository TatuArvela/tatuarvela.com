import * as React from 'react';
import styled from 'styled-components';
import { FONT_SIZE_DEFAULT, PRIMARY, BACKGROUND_COLOR_1, WHITE } from '../../theme';
import { DOG_EAR_SIZE } from './constants';
import rgba from '../../rgba';
import { CloseOutline } from 'react-ionicons';

const StyledCloseButton = styled.button`
  background: ${WHITE};
  border: 0;
  box-shadow: 0 3px 5px ${rgba('#000000', 25)};
  box-sizing: border-box;
  color: ${PRIMARY};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-family: inherit;
  font-size: ${FONT_SIZE_DEFAULT};
  font-weight: bold;
  height: ${DOG_EAR_SIZE};
  overflow: hidden;
  padding: 0;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 0;
  transition: background-color 0.2s, color 0.2s;
  width: ${DOG_EAR_SIZE};

  &:hover,
  &:focus {
    background: ${BACKGROUND_COLOR_1};
    outline: none;
    text-decoration: none;

    > span > svg {
      color: ${WHITE};
    }
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 60%;

    > svg {
      height: 100%;
      width: 100%;
    }
  }
`;

const CloseButton = (props) => (
  <StyledCloseButton type='button' {...props}>
    <CloseOutline />
  </StyledCloseButton>
);

export default CloseButton;
