import React from "react";
//import styled from "styled-components";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";
//import { QUERIES } from "../utils/mediaQueries";

import Navigation from "../components/home/navigation/Navigation";
import WebDesignHeader from "../components/web-design/WebDesignHeader";
import Main from "../components/web-design/Main";


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
        </Container>
        </>
    )
}

export default WebDesign;