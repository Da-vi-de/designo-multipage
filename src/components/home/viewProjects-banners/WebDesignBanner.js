import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../../../utils/mediaQueries";

import webDesignMobile from "../../../assets/home/mobile/image-web-design.jpg";
import webDesignTablet from "../../../assets/home/tablet/image-web-design.jpg";
import webDesignDesktop from "../../../assets/home/desktop/image-web-design-large.jpg";

import iconRightArrow from "../../../assets/shared/desktop/icon-right-arrow.svg";
import { CommonViewProjectsBanner } from "../../styles/shared-styles/CommonViewProjectsBanner.styled"

const Banner = styled.div`
    ${CommonViewProjectsBanner}
    .container {
        background-image: url(${webDesignMobile});
    }

    @media ${QUERIES.tabletMini} {
        .container {
            background-image: url(${webDesignTablet});
        }
    }

    @media ${QUERIES.desktop} {
        grid-area: 1/1/3/1;
        .container {
            background-image: url(${webDesignDesktop});
            padding-bottom: 100%;
        }

        .text-container {
            transform: translateY(400%);
        }
    }
`
function WebDesignBanner() {
    return(
        <Banner>
            <div className="container">
                <div className="text-container">
                    <h3>Web Design</h3>
                    <div className="link-position">
                        <Link to="/web-design">view projects</Link>
                        <img src={iconRightArrow} alt="right arrow" className="arrow-img"/>
                    </div>
                </div>
            </div>
        </Banner>
    )
}

export default WebDesignBanner;