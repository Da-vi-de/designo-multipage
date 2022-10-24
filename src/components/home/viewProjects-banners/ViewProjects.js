import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../../utils/mediaQueries";

import WebDesignBanner from "./WebDesignBanner";
import AppDesignBanner from "./AppDesignBanner";
import GraphicDesignBanner from "./GraphicDesignBanner";


const GridDesktop = styled.main`
 @media ${QUERIES.desktop} {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
        margin-top: 4rem;
 }
`
function ViewProjects() {
    return(
        <GridDesktop>
            <WebDesignBanner  />
            <AppDesignBanner />
            <GraphicDesignBanner />
        </GridDesktop>
    )
}

export default ViewProjects;