import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Navigation from "../components/home/navigation/Navigation";
import WebDesignHeader from "../components/web-design/WebDesignHeader";
import WebDesignMain from "../components/web-design/WebDesignMain";
import ViewProjects from "../components/home/viewProjects-banners/ViewProjects";
import Footer from "../components/home/footer/Footer";
import { Spacer } from "../components/styles/shared-styles/Spacer.styled";

function WebDesign() {
    return(
        <>
        <GlobalStyles />

        <Container>
            <Navigation/>
        </Container>

        <WebDesignHeader />

        <Container>
            <WebDesignMain />
            <ViewProjects />
            <Spacer />
        </Container>

        <Footer />
        </>
    )
}

export default WebDesign;