import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../../utils/mediaQueries";

import LogoLight from "../footer/LogoLight";
import FooterContent from "./FooterContent";

const FooterContainer = styled.footer`
    position: absolute;
    width: 100%;
    min-height: 120%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    background-color: var(--color-black);

    @media ${QUERIES.tabletMini} {
        min-height: 100%;
        align-items: flex-start;
    }

    @media ${QUERIES.megaDesktop} {
        min-height: 80%;
    }
`
function Footer() {
    return(
        <FooterContainer >
            <LogoLight />
            <FooterContent />
        </FooterContainer>
    )
}

export default Footer;