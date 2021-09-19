import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from './Label';
import { inputStyle } from './inputStyle';

const StyledTextArea = styled.textarea`
  ${inputStyle};
  min-height: 6rem;
`;

const TextArea = ({ id, label, ...rest }) => (
  <>
    <Label className="ContactForm__label" htmlFor={id} label={label} />
    <StyledTextArea type="text" name={id} id={id} {...rest} />
  </>
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextArea;
