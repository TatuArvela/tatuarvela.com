import { ReactNode } from "react";
import styled from "styled-components";
import rgba from "styles/rgba";

type ModalWrapperProps = {
  children?: ReactNode;
  toggled: boolean;
  height: string;
};

const ModalWrapper = styled.div<ModalWrapperProps>`
  animation: to-visible 0s 0.3s 1 forwards;
  backdrop-filter: blur(1rem);
  background: ${(props) => props.toggled && rgba("#000000", 25)};
  bottom: 0;
  contain: strict;
  display: block;
  left: 0;
  opacity: ${(props: ModalWrapperProps) => (props.toggled ? 1 : 0)};
  overflow-y: auto;
  pointer-events: ${(props) => (props.toggled ? "auto" : "none")};
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  transition: opacity 0.3s;
  visibility: hidden;
  z-index: 3;

  @media screen and (min-height: ${(props) => props.height}) {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  @keyframes to-visible {
    to {
      visibility: visible;
    }
  }
`;

export default ModalWrapper;
