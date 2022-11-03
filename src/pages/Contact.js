import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Navigation from "../components/home/navigation/Navigation";
import ContactForm from "../components/contact/ContactForm";
import AboutLocations from "../components/about/AboutLocations";
import Footer from "../components/home/footer/Footer";
import { Spacer } from "../components/styles/shared-styles/Spacer.styled";

function Contact() {
    return(
        <>
        <GlobalStyles />

         <Container>
            <Navigation/>
        </Container>

        <ContactForm />
        <AboutLocations />
        <Spacer />
        <Footer />
        </>
    )
}

export default Contact;