import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../../styles/shared-styles/Wrapper.styled"
import { QUERIES } from "../../../utils/mediaQueries";

import { StyledHeader  } from "../../styles/home-styles/header-styles/Header.styled";
import { CommonButtonLink } from "../../styles/shared-styles/CommonButtonLink.styled";
import phoneImage from "../../../assets/home/desktop/image-hero-phone.png";

const ButtonLink = styled(Link)`
    ${CommonButtonLink}
    background-color: var(--color-white);
    color: var(--color-black);

    @media ${QUERIES.desktop} {
        margin-right: 20rem;
    }
`;

function Header() {
    return(
        <StyledHeader>
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
            </Container>
                <div className="img-container">
                    <img src={phoneImage} className="phone-img" alt="phone" />
                </div>
        </StyledHeader>
    )
}

export default Header;