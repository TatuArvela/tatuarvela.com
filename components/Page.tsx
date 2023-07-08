import "@fontsource/urbanist/400.css";
import "@fontsource/urbanist/600.css";

import { useState } from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { BREAKPOINT_TINY } from "styles/themeVariables";

import ContactForm from "./contactForm/ContactForm";
import Container from "./Container";
import Footer from "./Footer";
import Head from "./Head";
import Header from "./header/Header";

const StyledPage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1.5rem 1.5rem;
  width: 100%;

  @media screen and (max-width: ${BREAKPOINT_TINY}) {
    padding: 1.5rem 1rem;
  }
`;

type PageProps = {
  pageTitle: string;
  children: ReactNode;
};

const Page = ({ pageTitle, children }: PageProps) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const openForm = () => setShowContactForm(true);
  const closeForm = () => setShowContactForm(false);

  return (
    <>
      <GlobalStyle />
      <Head />
      <StyledPage>
        <Header openForm={openForm} />
        <Container title={pageTitle}>{children}</Container>
        <Footer />
      </StyledPage>
      <ContactForm toggled={showContactForm} close={closeForm} />
    </>
  );
};

export default Page;
