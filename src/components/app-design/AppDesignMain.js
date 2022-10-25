import React from "react";
import styled from "styled-components";
import { CommonCard } from "../styles/shared-styles/CommonDesignProjectsCard.styled";

import airfilterImg from "../../assets/app-design/desktop/image-airfilter.jpg";
import eyecamImg from "../../assets/app-design/desktop/image-eyecam.jpg";
import faceitImg from "../../assets/app-design/desktop/image-faceit.jpg";
import todoImg from "../../assets/app-design/desktop/image-todo.jpg";
import loopstudiosImg from "../../assets/app-design/desktop/image-loopstudios.jpg";

const StyledMain = styled.main`
    ${CommonCard}
`
function AppDesignMain() {
    return(
        <StyledMain>
            <div className="card">
                <div className="card-img">
                    <img src={airfilterImg} alt="website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>airfilter</h2>
                    <p>
                      Solving the problem of poor indoor air
                      quality of filtering the air
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={eyecamImg} alt="website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>eyecam</h2>
                    <p>
                      Product that lets you edit your favorite
                      photos and videos at any time
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={faceitImg} alt="website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>faceit</h2>
                    <p>
                       Get to meet you favorite internet
                       superstar with the faceit app
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={todoImg} alt="website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>todo</h2>
                    <p>
                        A todo app that features cloud sync
                        with light and dark mode
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={loopstudiosImg} alt="e-commerce website screenshot"/>
                </div>

                <div className="card-info">
                    <h2>loopstudios</h2>
                    <p>
                       A VR experience app
                    </p>
                    <p>made for loopstudios</p>
                </div>
            </div>
        </StyledMain>
    )
}

export default AppDesignMain;