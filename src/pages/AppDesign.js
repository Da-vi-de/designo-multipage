import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Navigation from "../components/home/navigation/Navigation";
import AppDesignHeader from "../components/app-design/AppDesignHeader";
import AppDesignMain from "../components/app-design/AppDesignMain";
import Footer from "../components/home/footer/Footer";
import { Spacer } from "../components/styles/shared-styles/Spacer.styled";
import ViewProjects from "../components/home/viewProjects-banners/ViewProjects";

function AppDesign() {
    return(
        <>
        <GlobalStyles />

        <Container>
            <Navigation/>
        </Container>

        <AppDesignHeader />

        <Container>
            <AppDesignMain />
            <ViewProjects />
            <Spacer />
        </Container>

        <Footer />
        </>
    )
}

export default AppDesign;