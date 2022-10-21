import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Header from "../components/home/header/Header";
import Main from "../components/home/main/Main";
import ViewProjects from "../components/home/viewProjects-banners/ViewProjects";
import CompanyCulture from "../components/home/passionate-resorceful-friendly/CompanyCulture";
//import GetInTouch from "../components/home/get-in-touch/GetInTouch";
import Footer from "../components/home/footer/Footer";

function Home() {
    return(
        <>
        <GlobalStyles />

        <Container>
            <Header />
        </Container>

        <Main />

        <Container>
            <ViewProjects />
            <CompanyCulture />
        </Container>

        <Footer />
        </>
    )
}

export default Home;