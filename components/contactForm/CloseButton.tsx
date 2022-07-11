import { CloseOutline } from "react-ionicons";
import styled from "styled-components";
import rgba from "styles/rgba";
import {
  BACKGROUND_COLOR_1,
  FONT_SIZE_DEFAULT,
  PRIMARY,
  WHITE,
} from "styles/themeVariables";

type StyledCloseButtonProps = {
  size: string;
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
  height: ${(props: StyledCloseButtonProps) => props.size};
  overflow: hidden;
  padding: 0;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 0;
  transition: background-color 0.2s, color 0.2s;
  width: ${(props: StyledCloseButtonProps) => props.size};

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

type CloseButtonProps = typeof StyledCloseButton.props;

const CloseButton = (props: CloseButtonProps) => (
  <StyledCloseButton type="button" {...props}>
    <CloseOutline />
  </StyledCloseButton>
);

export default CloseButton;
