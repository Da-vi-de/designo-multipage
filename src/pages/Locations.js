import React from "react";
import { GlobalStyles } from "../components/styles/shared-styles/GlobalStyles";
import { Container } from "../components/styles/shared-styles/Wrapper.styled";

import Navigation from "../components/home/navigation/Navigation";
import Location from "../components/locations/Location";
import Footer from "../components/home/footer/Footer";
import {Spacer} from "../components/styles/shared-styles/Spacer.styled";

function Locations() {
    return(
        <>
        <GlobalStyles />

        <Container>
            <Navigation />
        </Container>

        <Location />
        <Spacer />
        <Footer />
        </>
    )
}

export default Locations;