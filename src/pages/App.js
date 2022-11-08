import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Navigation from "../components/home/navigation/Navigation";
import Header from "../components/home/header/Header";
import ViewProjects from "../components/home/viewProjects-banners/ViewProjects";
import CompanyCulture from "../components/home/passionate-resorceful-friendly/CompanyCulture";
import Footer from "../components/home/footer/Footer";

function Home() {
    return(
        <>
        <GlobalStyles />

        <Container>
            <Navigation />
        </Container>

        <Header />

        <Container>
            <ViewProjects />
            <CompanyCulture />
        </Container>

        <Footer />
        </>
    )
}

export default Home;