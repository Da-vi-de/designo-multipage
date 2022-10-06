import React from "react";
import { GlobalStyles } from "../components/styles/GlobalStyles";
import { Container } from "../components/styles/Wrapper.styled";

import Header from "../components/header/Header";

function Home() {
    return(
        <>
        <GlobalStyles />
        <Container>
            <Header />
        </Container>
        </>
    )
}

export default Home;