import React from "react";
import { GlobalStyles } from "../components/styles/shared-style/GlobalStyles";
import { Container } from "../components/styles/shared-style/Wrapper.styled";

import Header from "../components/home/header/Header";
import Main from "../components/home/Main";

function Home() {
    return(
        <>
        <GlobalStyles />
        <Container>
            <Header />
        </Container>
        <Main />
        <Container>

        </Container>
        </>
    )
}

export default Home;