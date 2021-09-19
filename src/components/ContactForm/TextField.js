import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from './Label';
import { inputStyle } from './inputStyle';

const StyledTextField = styled.input`
  ${inputStyle};
`;

const TextField = ({ id, label, ...rest }) => (
  <>
    <Label className="ContactForm__label" htmlFor={id} label={label} />
    <StyledTextField type="text" name={id} id={id} {...rest} />
  </>
);

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextField;
