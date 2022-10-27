import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Navigation from "../components/home/navigation/Navigation";
import AboutHeader from "../components/about/AboutHeader";
import AboutCardInfo from "../components/about/AboutCardInfo";
import AboutCardInfoTwo from "../components/about/AboutCardInfoTwo";
import Footer from "../components/home/footer/Footer";
import {Spacer} from "../components/styles/shared-styles/Spacer.styled";

function About() {
    return(
        <>
        <GlobalStyles />

         <Container>
            <Navigation/>
        </Container>

        <AboutHeader />
        <AboutCardInfo />
        <AboutCardInfoTwo />
        <Spacer />
        <Footer />
        </>
    )
}

export default About;