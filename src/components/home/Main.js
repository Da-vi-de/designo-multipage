import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { QUERIES } from "../../utils/mediaQueries";

import { StyledMain  } from "../styles/home/Main.styled";
import { Container } from "../styles/shared-style/Wrapper.styled";
import { CommonButtonLink } from "../styles/shared-style/CommonButtonLink.styled";

const ButtonLink = styled(Link)`
    ${CommonButtonLink}
    background-color: var(--color-white);
    color: var(--color-black);

    @media ${QUERIES.desktop} {
        margin-right: 20rem;
    }
`;

function Main() {
    return(
        <StyledMain >
            <Container>
                <div className="content-position">
                    <div className="text-button-position">
                    <h1>
                        Award-winning custom designs and digital
                        branding solutions
                    </h1>
                    <p>
                        With over 10 years in the industry,
                        we are experienced in creating fully
                        responsive websites, app designs, and
                        engaging brand experiences. Find out
                        more about our services.
                    </p>
                    <ButtonLink to="/about">Learn More</ButtonLink>
                    </div>
                 </div>
                <div className="phone-img"></div>
             </Container>
        </StyledMain>
    )
}

export default Main;
