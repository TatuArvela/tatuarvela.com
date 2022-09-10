import { CloseOutline, MenuOutline } from "components/icons";
import { useTranslation } from "i18n";
import styled from "styled-components";
import { animFadeIn } from "styles/animations";
import { BREAKPOINT_MOBILE, LINK_COLOR } from "styles/themeVariables";

const StyledMobileNavigationToggle = styled.button`
  ${animFadeIn};
  background: none;
  border: none;
  color: ${LINK_COLOR};
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

  > svg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

type MobileNavigationToggleProps = {
  isToggled: boolean;
  onClick(): void;
};

const MobileNavigationToggle = ({
  isToggled,
  onClick,
}: MobileNavigationToggleProps) => {
  const { t } = useTranslation();
  return (
    <StyledMobileNavigationToggle onClick={onClick}>
      {isToggled ? (
        <CloseOutline aria-label={t("navigation.close")} />
      ) : (
        <MenuOutline aria-label={t("navigation.open")} />
      )}
    </StyledMobileNavigationToggle>
  );
};

export default MobileNavigationToggle;
