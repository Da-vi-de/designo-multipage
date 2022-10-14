import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Header from "../components/home/header/Header";
import Main from "../components/home/main/Main";
import ViewProjects from "../components/home/viewProjects-banners/ViewProjects";

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
        </Container>
        </>
    )
}

export default Home;