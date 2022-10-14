import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../../../utils/mediaQueries";

import graphicDesignMobile from "../../../assets/home/mobile/image-graphic-design.jpg";
import graphicDesignTablet from "../../../assets/home/tablet/image-graphic-design.jpg";
import graphicDesignDesktop from "../../../assets/home/desktop/image-graphic-design.jpg";

import iconRightArrow from "../../../assets/shared/desktop/icon-right-arrow.svg";
import { CommonViewProjectsBanner } from "../../styles/shared-styles/CommonViewProjectsBanner.styled"

const Banner = styled.div`
    ${CommonViewProjectsBanner}
    .container {
        background-image: url(${graphicDesignMobile});
    }

    @media ${QUERIES.tabletMini} {
        .container {
            background-image: url(${graphicDesignTablet});
        }

    }

    @media ${QUERIES.desktop} {
        grid-area: 2/2/2/2;
        .container {
            background-image: url(${graphicDesignDesktop});
            padding-bottom: 37%;
        }

        .text-container {
            transform: translateY(120%);
        }
    }
`
function GraphicDesignBanner() {
    return(
        <Banner>
            <div className="container ">
                <div className="text-container">
                    <h3>Graphic Design</h3>
                    <div className="link-position">
                        <Link to="/web-design">view projects</Link>
                        <img src={iconRightArrow} alt="right arrow" className="arrow-img"/>
                    </div>
                </div>
            </div>
        </Banner>
    )
}

export default GraphicDesignBanner;