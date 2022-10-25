import React from "react";
import styled from "styled-components";
import { CommonCard } from "../styles/shared-styles/CommonDesignProjectsCard.styled";

import expressImg from "../../assets/web-design/desktop/image-express.jpg";
import transferImg from "../../assets/web-design/desktop/image-transfer.jpg";
import photonImg from "../../assets/web-design/desktop/image-photon.jpg";
import builderImg from "../../assets/web-design/desktop/image-builder.jpg";
import blogrImg from "../../assets/web-design/desktop/image-blogr.jpg";
import campImg from "../../assets/web-design/desktop/image-camp.jpg";

const StyledMain = styled.main`
    ${CommonCard}
`
function WebDesignMain() {
    return(
        <StyledMain>
            <div className="card">
                <div className="card-img">
                    <img src={expressImg} alt=" website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>express</h2>
                    <p>
                        A multi-carrier shipping website
                        for e-commerce business
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={transferImg} alt="website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>transfer</h2>
                    <p>
                        Site for low-cost money transfers
                        and sending money within seconds
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={photonImg} alt="website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>photon</h2>
                    <p>
                       A state-of-the-art music player with
                       high-resolution audio and DSP effects
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={builderImg} alt="website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>builder</h2>
                    <p>
                        Connects users with local contranctors
                        based on their location
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={blogrImg} alt="website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>blogr</h2>
                    <p>
                        Blogr is a platform for creating
                        an online blog or publication
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={campImg} alt="website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>camp</h2>
                    <p>
                      Get expert training in coding, data,
                      design, and digital marketing
                    </p>
                </div>
            </div>
        </StyledMain>
    )
}

export default WebDesignMain;