import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import GlobalStyle from '../globalStyles';
import '@fontsource/poppins/400.css';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { BREAKPOINT_TINY } from '../theme';
import MobileNavigation from '../components/MobileNavigation';
import Head from '../components/Head';

const StyledPage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem 2rem;
  width: 100%;

  @media screen and (max-width: ${BREAKPOINT_TINY}) {
    padding: 2rem 1rem;
  }
`;

const Page = ({ pageTitle, children }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

  const openForm = () => setShowContactForm(true);
  const closeForm = () => setShowContactForm(false);
  const toggleMobileNavigation = () => setMobileNavigationOpen((isOpen) => !isOpen);


  return (
    <>
      <GlobalStyle />
      <Head />
      <StyledPage>
        <Header
          openForm={openForm}
          isMobileNavigationOpen={mobileNavigationOpen}
          toggleMobileNavigation={toggleMobileNavigation}
        />
        <MobileNavigation openForm={openForm} isOpen={mobileNavigationOpen} />
        <Container title={pageTitle}>{children}</Container>
        <Footer />
      </StyledPage>
      <ContactForm toggled={showContactForm} close={closeForm} />
    </>
  );
};

Page.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Page;
