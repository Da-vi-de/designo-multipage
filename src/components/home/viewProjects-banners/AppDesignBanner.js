import React from "react";
import { Link } from "react-router-dom";

import iconRightArrow from "../../../assets/shared/desktop/icon-right-arrow.svg";
import { StyledAppDesignBanner } from "../../styles/home-styles/viewProjects-styles/AppDesignBanner.styled";

function AppDesignBanner() {
    return(
        <StyledAppDesignBanner>
            <div className="container">
                <div className="text-container">
                    <h3>App Design</h3>
                    <div className="link-position">
                        <Link to="/app-design">view projects</Link>
                        <img src={iconRightArrow} alt="right arrow" className="arrow-img"/>
                    </div>
                </div>
            </div>
        </StyledAppDesignBanner>
    )
}

export default AppDesignBanner;
