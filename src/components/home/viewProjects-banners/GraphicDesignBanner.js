import React from "react";
import { Link } from "react-router-dom";
import { StyledGraphicDesignBanner } from "../../styles/home-styles/viewProjects-styles/GraphicDesignBanner.styled";

import iconRightArrow from "../../../assets/shared/desktop/icon-right-arrow.svg";

function GraphicDesignBanner() {
    return(
        <StyledGraphicDesignBanner>
            <div className="container ">
                <div className="text-container">
                    <h2>Graphic Design</h2>
                    <div className="link-position">
                        <Link to="/graphic-design">view projects</Link>
                        <img src={iconRightArrow} alt="right arrow" className="arrow-img"/>
                    </div>
                </div>
            </div>
        </StyledGraphicDesignBanner>
    )
}

export default GraphicDesignBanner;