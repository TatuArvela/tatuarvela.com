import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FONT_SIZE_SECONDARY } from '../../theme';

const StyledLabel = styled.label`
  display: inline-block;
  font-size: ${FONT_SIZE_SECONDARY};
  margin-bottom: 0.5rem;
`;

const Label = ({ htmlFor, label }) => (
  <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Label;
