import React from "react";

import passionateImg from "../../../assets/home/desktop/illustration-passionate.svg";
import resourcefulImg from "../../../assets/home/desktop/illustration-resourceful.svg";
import friendlyImg from "../../../assets/home/desktop/illustration-friendly.svg";

import { StyledCompanyCulture } from "../../styles/home-styles/passionate-resorceful-friendly-styles/CompanyCulture.styled";

function CompanyCulture() {
    return(
        <StyledCompanyCulture>
            <div className="content">

                <div className="images">
                    <img src= {passionateImg} alt=" " />
                </div>

                <div className="title-text-tablet-desk">

                    <h3 className="title">passionate</h3>

                    <div>
                        <p className="text">
                            Each project starts with an in-depth brand
                            research to ensure we only create products
                            that serve a purpose. We merge art, design,
                            and technology into exciting new solutions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content">

                <div className="images">
                    <img src={resourcefulImg} alt=" "/>
                </div>

                <div className="title-text-tablet-desk">

                    <h3 className="title">resourceful</h3>

                    <div>
                        <p className="text">
                            Everything that we do has a strategic purpose.
                            We use an agile approach in all of our projects
                            and value customer collaboration. It guarantees
                            superior results that fulfill our clients' needs.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content">

                <div className="images">
                    <img src={friendlyImg} alt=" "/>
                </div>

                <div className="title-text-tablet-desk">

                    <h3 className="title">friendly</h3>

                    <div>
                        <p className="text">
                            We are a group of enthusiatic folks who know how
                            to put people first. Our success depends on our
                            customers, and we strive to give them the best
                            experience a company can provide.
                        </p>
                    </div>
                </div>
            </div>
        </StyledCompanyCulture>
    )
}

export default CompanyCulture;