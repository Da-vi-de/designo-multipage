import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../../../utils/mediaQueries";

import appDesignMobile from "../../../assets/home/mobile/image-app-design.jpg";
import appDesignTablet from "../../../assets/home/tablet/image-app-design.jpg";
import appDesignDesktop from "../../../assets/home/desktop/image-app-design.jpg";

import iconRightArrow from "../../../assets/shared/desktop/icon-right-arrow.svg";
import { CommonViewProjectsBanner } from "../../styles/shared-styles/CommonViewProjectsBanner.styled"

const Banner = styled.div`
    ${CommonViewProjectsBanner}
    .container {
        background-image: url(${appDesignMobile});
    }

    @media ${QUERIES.tabletMini} {
        .container {
            background-image: url(${appDesignTablet});
        }
    }

    @media ${QUERIES.desktop} {
        grid-area: 1/2/1/2;
        .container {
            background-image: url(${appDesignDesktop});
            padding-bottom: 35%;
        }

        .text-container {
            transform: translateY(120%);
        }
    }
`
function AppDesignBanner() {
    return(
        <Banner>
            <div className="container">
                <div className="text-container">
                    <h3>App Design</h3>
                    <div className="link-position">
                        <Link to="/app-design">view projects</Link>
                        <img src={iconRightArrow} alt="right arrow" className="arrow-img"/>
                    </div>
                </div>
            </div>
        </Banner>
    )
}

export default AppDesignBanner;
