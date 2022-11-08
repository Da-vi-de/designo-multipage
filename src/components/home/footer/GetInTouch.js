import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CommonButtonLink } from "../../styles/shared-styles/CommonButtonLink.styled";
import { StyledGetInTouch } from "../../styles/home-styles/footer-styles/GetInTouch.styled";

const ButtonLink = styled(Link)`
    ${CommonButtonLink}
    background-color: var(--color-white);
    color: var(--color-black);
    background-size: auto;
    overflow: hidden;
`;

function GetInTouch() {
    return(
        <StyledGetInTouch>
            <div className="content-desktop-position">

                <div className="title-container">
                    <h3 className="title">Let's talk about your project</h3>
                </div>

                <div className="text-container">
                    <p className="text">
                        Ready to take it to the next level?
                        Contact us today and find out how
                        our expertise can help you businnes grow.
                    </p>
                </div>
            </div>

            <div className="btn-link-container">
                <ButtonLink to="/contact">Get in touch</ButtonLink>
            </div>
        </StyledGetInTouch>
    )
}

export default GetInTouch;