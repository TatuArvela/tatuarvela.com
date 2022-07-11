import { CloseOutline, ReorderFourOutline } from "react-ionicons";
import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "styles/themeVariables";

const StyledMobileNavigationToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  height: 1.75rem;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  pointer-events: none;
  transition: transform 0.2s ease-out;
  user-select: none;
  width: 1.75rem;
  z-index: 2;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
    display: block;
    opacity: 1;
    pointer-events: auto;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    > svg {
      height: 100%;
      width: 100%;
    }
  }
`;

type MobileNavigationToggleProps = {
  isToggled: boolean;
  onClick(): void;
};

const MobileNavigationToggle = ({
  isToggled,
  onClick,
}: MobileNavigationToggleProps) => (
  <StyledMobileNavigationToggle onClick={onClick}>
    {isToggled ? <CloseOutline /> : <ReorderFourOutline />}
  </StyledMobileNavigationToggle>
);

export default MobileNavigationToggle;
