import * as React from 'react';
import styled from 'styled-components';
import { FONT_SIZE_SECONDARY } from '../theme';
import { animFadeIn } from '../animations';

const StyledFooter = styled.div`
  ${animFadeIn};
  font-size: ${FONT_SIZE_SECONDARY};
  text-align: center;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>&copy; {year} Tatu Arvela. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
