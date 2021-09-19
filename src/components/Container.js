import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT_SIZE_DEFAULT } from '../theme';
import { ANIM_DELAY_1, animFadeIn, animFadeInAndCondense } from '../animations';

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  ${animFadeInAndCondense};
  animation-delay: ${ANIM_DELAY_1};
  font-weight: bold;
  hyphens: auto;
  line-height: 1.2em;
  margin: 1.8rem 0;
  max-width: 55rem;
  transition: font-size 0.3s ease-out;
  width: 100%;
  word-break: break-word;
  word-spacing: 100vw;
  text-align: center;
`;

const Content = styled.div`
  ${animFadeIn};
  animation-delay: ${ANIM_DELAY_1};
  font-size: ${FONT_SIZE_DEFAULT};
  line-height: 1.8em;
  margin-bottom: 3rem;
  max-width: 55rem;
  width: 100%;
`;

const Container = ({ title, children }) => (
  <StyledContainer>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </StyledContainer>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Container;
