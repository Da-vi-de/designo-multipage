import React from "react";
import { Link } from "react-router-dom";
import { StyledWebDesignBanner } from "../../styles/home-styles/viewProjects-styles/WebDesignBanner.styled";

import iconRightArrow from "../../../assets/shared/desktop/icon-right-arrow.svg";

function WebDesignBanner({padding}) {
    return(
        <StyledWebDesignBanner>
            <div className="container">
                <div className="text-container">
                    <h3>Web Design</h3>
                    <div className="link-position">
                        <Link to="/web-design">view projects</Link>
                        <img src={iconRightArrow} alt="right arrow" className="arrow-img"/>
                    </div>
                </div>
            </div>
        </StyledWebDesignBanner>
    )
}

export default WebDesignBanner;