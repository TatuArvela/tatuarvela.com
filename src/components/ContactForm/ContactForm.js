import * as React from 'react';
import styled from 'styled-components';
import { FORM_HEIGHT } from './constants';
import Form from './Form';
import SubmitButton from './SubmitButton';
import CloseButton from './CloseButton';
import TextField from './TextField';
import TextArea from './TextArea';
import rgba from '../../rgba';
import PropTypes from 'prop-types';

const StyledContactForm = styled.div`
  align-items: center;
  animation: eliminate-fade 0s 0.3s 1 forwards;
  backdrop-filter: blur(1rem);
  background: ${(props) => props.toggled && rgba('#000000', 25)};
  bottom: 0;
  contain: strict;
  display: block;
  left: 0;
  opacity: ${(props) => (props.toggled ? 1 : 0)};
  overflow-y: auto;
  pointer-events: ${(props) => (props.toggled ? 'auto' : 'none')};
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  transition: opacity 0.3s;
  visibility: hidden;
  z-index: 3;

  @media screen and (min-height: ${FORM_HEIGHT}) {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  @keyframes eliminate-fade {
    to {
      visibility: visible;
    }
  }
`;

const ContactForm = ({ close, toggled }) => (
  <StyledContactForm toggled={toggled}>
    <Form
      toggled={toggled}
      method="POST"
      action="https://formspree.io/%63%6F%6E%74%61%63%74@%74%61%74%75%61%72%76%65%6C%61%2E%63%6F%6D"
    >
      <CloseButton onClick={close} />
      <h2>Contact me</h2>
      <TextField id="name" label="Name" required />
      <TextField id="email" label="Email address" required />
      <TextArea id="message" label="Message" rows="8" required />
      <SubmitButton />
    </Form>
  </StyledContactForm>
);

ContactForm.propTypes = {
  close: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired,
}

export default ContactForm;
