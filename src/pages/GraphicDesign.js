import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Navigation from "../components/home/navigation/Navigation";
import GraphicDesignHeader from "../components/graphic-design/GraphicDesignHeader";
import GraphicDesignMain from "../components/graphic-design/GraphicDesignMain";
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

        <GraphicDesignHeader />

        <Container>
            <GraphicDesignMain />
            <ViewProjects />
            <Spacer />
        </Container>

        <Footer />
        </>
    )
}

export default AppDesign;