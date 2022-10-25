import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Navigation from "../components/home/navigation/Navigation";
import WebDesignHeader from "../components/web-design/WebDesignHeader";
import Main from "../components/web-design/Main";
import AppDesignBanner from "../components/home/viewProjects-banners/AppDesignBanner";
import GraphicDesignBanner from "../components/home/viewProjects-banners/GraphicDesignBanner";
import Footer from "../components/home/footer/Footer";
import { Spacer } from "../components/styles/shared-styles/Spacer.styled";
import { DesignBannerDesktopSpace } from "../components/styles/shared-styles/DesignBannerDesktopSpace.styled";

function WebDesign() {
    return(
        <>
        <GlobalStyles />

        <Container>
            <Navigation/>
        </Container>

        <WebDesignHeader />

        <Container>
            <Main />
            <AppDesignBanner />
            <DesignBannerDesktopSpace />
            <GraphicDesignBanner />
            <Spacer />
        </Container>

        <Footer />
        </>
    )
}

export default WebDesign;