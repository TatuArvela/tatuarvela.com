import { CloseOutline } from "components/icons";
import styled from "styled-components";
import rgba from "styles/rgba";
import {
  BACKGROUND_COLOR_1,
  FONT_SIZE_DEFAULT,
  PRIMARY,
  WHITE,
} from "styles/themeVariables";

type StyledCloseButtonProps = {
  $size: string;
};

const StyledCloseButton = styled.button<StyledCloseButtonProps>`
  background: ${WHITE};
  border: 0;
  box-shadow: 0 3px 5px ${rgba("#000000", 25)};
  box-sizing: border-box;
  color: ${PRIMARY};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-family: inherit;
  font-size: ${FONT_SIZE_DEFAULT};
  font-weight: bold;
  height: ${(props) => props.$size};
  overflow: hidden;
  padding: 0;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 0;
  transition:
    background-color 0.2s,
    color 0.2s;
  width: ${(props) => props.$size};

  &:hover,
  &:focus {
    background: ${BACKGROUND_COLOR_1};
    outline: none;
    text-decoration: none;

    > span > svg {
      color: ${WHITE};
    }
  }

  > svg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 60%;
  }
`;

type CloseButtonProps = {
  size: string;
  onClick: () => void;
};

const CloseButton = ({ size, onClick }: CloseButtonProps) => (
  <StyledCloseButton type="button" $size={size} onClick={onClick}>
    <CloseOutline />
  </StyledCloseButton>
);

export default CloseButton;
