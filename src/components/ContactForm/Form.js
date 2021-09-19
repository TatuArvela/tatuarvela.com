import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DOG_EAR_SIZE, FORM_HEIGHT } from './constants';
import { PRIMARY, WHITE } from '../../theme';

const StyledForm = styled.form`
  background-color: ${WHITE};
  box-shadow: 0 0 10px ${PRIMARY + '01'};
  box-sizing: border-box;
  clip-path: polygon(
    0 0,
    calc(100% - ${DOG_EAR_SIZE}) 0,
    100% ${DOG_EAR_SIZE},
    100% 100%,
    0 100%
  );
  color: ${PRIMARY};
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  max-height: ${FORM_HEIGHT};
  max-width: 420px;
  padding: 3rem 2rem 1rem;
  position: relative;
  text-align: left;
  transform: ${(props) => (props.toggled ? 'scale(1)' : 'scale(1.2)')};
  transition: transform 0.3s;
  width: 98vw;
  will-change: transform;
`;

const Form = ({ children, ...rest }) => (
  <StyledForm {...rest}>{children}</StyledForm>
);

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  toggled: PropTypes.bool.isRequired,
};

export default Form;
