import React from "react";
import styled from "styled-components";
import { CommonCard } from "../styles/shared-styles/CommonDesignProjectsCard.styled";

import timBrownImg from "../../assets/graphic-design/desktop/image-change.jpg";
import boxedWaterImg from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImg from "../../assets/graphic-design/desktop/image-science.jpg";

const StyledMain = styled.main`
    ${CommonCard}
`
function GraphicDesignMain() {
    return(
        <StyledMain>
            <div className="card">
                <div className="card-img">
                    <img src={timBrownImg} alt="book"/>
                </div>

                <div className="card-info">
                    <h2>tim brown</h2>
                    <p>
                        A book cover designed for
                        Tim Brown's new release, 'Change'
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={boxedWaterImg} alt="boxed water"/>
                </div>

                <div className="card-info">
                    <h2>boxed water</h2>
                    <p>
                        A simple packaging concept
                        made for Boxed Water
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={scienceImg} alt="poster"/>
                </div>

                <div className="card-info">
                    <h2>science!</h2>
                    <p>
                       A poster made in collaboration
                       with the Federal Art Project
                    </p>
                </div>
            </div>
        </StyledMain>
    )
}

export default GraphicDesignMain;