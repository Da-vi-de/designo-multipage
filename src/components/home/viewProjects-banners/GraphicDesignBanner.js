import React from "react";
import { Link } from "react-router-dom";
import { StyledGraphicDesignBanner } from "../../styles/home-styles/viewProjects-styles/GraphicDesignBanner.styled";

import iconRightArrow from "../../../assets/shared/desktop/icon-right-arrow.svg";

function GraphicDesignBanner() {
    return(
        <StyledGraphicDesignBanner>
            <div className="container ">
                <div className="text-container">
                    <h3>Graphic Design</h3>
                    <div className="link-position">
                        <Link to="/web-design">view projects</Link>
                        <img src={iconRightArrow} alt="right arrow" className="arrow-img"/>
                    </div>
                </div>
            </div>
        </StyledGraphicDesignBanner>
    )
}

export default GraphicDesignBanner;