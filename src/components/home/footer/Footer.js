import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../../utils/mediaQueries";

import LogoLight from "../footer/LogoLight";
import GetInTouch from "../footer/GetInTouch";
import FooterContent from "./FooterContent";

const FooterContainer = styled.footer`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    background-color: var(--color-black);

    @media ${QUERIES.tabletMini} {
        align-items: flex-start;
    }
`
function Footer() {
    return(
        <FooterContainer >
             <GetInTouch />
            <LogoLight />
            <FooterContent />
        </FooterContainer>
    )
}

export default Footer;