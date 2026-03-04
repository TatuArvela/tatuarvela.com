import { ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import rgba from "styles/rgba";

type ModalWrapperProps = {
  children?: ReactNode;
  toggled: boolean;
  height: string;
};

type StyledModalWrapperProps = {
  $toggled: boolean;
  $height: string;
};

const transitionName = "modal";
const transitionDuration = 300;

const StyledModalWrapper = styled.div<StyledModalWrapperProps>`
  backdrop-filter: blur(1rem);
  background: ${(props) => props.$toggled && rgba("#000000", 25)};
  bottom: 0;
  contain: strict;
  left: 0;
  overflow-y: auto;
  opacity: 0;
  pointer-events: ${(props) => (props.$toggled ? "auto" : "none")};
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  visibility: hidden;
  transition: opacity ${transitionDuration}ms;
  z-index: 3;

  &.${transitionName}-enter, &.${transitionName}-enter-done {
    opacity: 1;
    visibility: visible;
  }
  &.${transitionName}-exit {
    visibility: visible;
  }
  &.${transitionName}-exit-done {
    visibility: hidden;
  }

  @media screen and (min-height: ${(props) => props.$height}) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

const ModalWrapper = ({ children, toggled, height }: ModalWrapperProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <CSSTransition
      in={toggled}
      classNames={transitionName}
      timeout={transitionDuration}
      nodeRef={nodeRef}
    >
      <StyledModalWrapper ref={nodeRef} $toggled={toggled} $height={height}>
        {children}
      </StyledModalWrapper>
    </CSSTransition>
  );
};

export default ModalWrapper;
