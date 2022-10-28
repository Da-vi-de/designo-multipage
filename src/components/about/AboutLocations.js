import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import canadaImg from "../../assets/shared/desktop/illustration-canada.svg";
import australiaImg from "../../assets/shared/desktop/illustration-australia.svg";
import ukImg from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import { CommonButtonLink } from "../styles/shared-styles/CommonButtonLink.styled";
import { StyledAboutLocations } from "../styles/about-styles/AboutLocations.styled";

const ButtonLink = styled(Link)`
    ${CommonButtonLink}
    background-color: var(--color-peach);
    color: var(--color-white);
`;

function AboutLocations() {
    return(
        <StyledAboutLocations>
            <div className="content-desktop">

                <div className="images">
                    <img src={canadaImg} alt="canada illustration"/>
                </div>

                <h3 className="title">canada</h3>

                <div className="btn-position">
                    <ButtonLink to="/locations">see location</ButtonLink>
                </div>
            </div>

            <div className="content-desktop">
                <div className="images">
                    <img src={australiaImg} alt="australia illustration"/>
                </div>

                <h3 className="title">australia</h3>

                <div className="btn-position">
                    <ButtonLink to="/locations">see location</ButtonLink>
                </div>
            </div>

            <div className="content-desktop">
                <div className="images">
                    <img src={ukImg} alt="uk illustration"/>
                </div>

                <h3 className="title">united kingdom</h3>

                <div className="btn-position">
                    <ButtonLink to="/locations" className="uk-btn">see location</ButtonLink>
                </div>
            </div>
        </StyledAboutLocations>
    )
}

export default AboutLocations;