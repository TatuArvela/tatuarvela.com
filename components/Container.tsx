import { ReactNode } from "react";
import styled from "styled-components";
import { ANIM_DELAY_1, animFadeIn } from "styles/animations";
import { FONT_SIZE_DEFAULT } from "styles/themeVariables";

import Title from "./Title";

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  ${animFadeIn};
  animation-delay: ${ANIM_DELAY_1};
  font-size: ${FONT_SIZE_DEFAULT};
  line-height: 1.8em;
  max-width: 80vw;
  width: max-content;
`;

type ContainerProps = {
  title: string;
  children: ReactNode;
};

const Container = ({ title, children }: ContainerProps) => (
  <StyledContainer>
    <Title title={title} />
    <Content>{children}</Content>
  </StyledContainer>
);

export default Container;
