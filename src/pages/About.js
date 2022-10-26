import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Navigation from "../components/home/navigation/Navigation";
import AboutHeader from "../components/about/AboutHeader";

function About() {
    return(
        <>
        <GlobalStyles />

         <Container>
            <Navigation/>
        </Container>

        <AboutHeader />
        </>
    )
}

export default About;