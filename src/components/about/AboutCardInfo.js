import React from "react";

import aboutCardInfoImgMobile from "../../assets/about/mobile/image-world-class-talent.jpg";
import aboutCardInfoImgTablet from "../../assets/about/tablet/image-world-class-talent.jpg";
import aboutCardInfoImgDesktop from "../../assets/about/desktop/image-world-class-talent.jpg";

import { StyledAboutCardInfo} from "../styles/about-styles/AboutCardInfo.styled";

function AboutCardInfo() {
    return(
        <StyledAboutCardInfo>
            <div className="card">
                <div className="card-img">
                    <picture>
                        <source srcSet={aboutCardInfoImgDesktop} media="(min-width: 1200px)"/>
                        <source srcSet={aboutCardInfoImgTablet} media="(min-width: 790px)"/>
                        <img src={aboutCardInfoImgMobile} alt="woman staring at paintings"/>
                    </picture>
                </div>

                <div className="card-info">
                    <h2>World-class talent</h2>
                    <p>
                        We are a crew of strategists, problem solvers
                        and technologists. Every design is thoughtfully
                        crafted from concept to launch, ensuring success
                        in its given market. We are constantly updating
                        our skill in myriad of platforms.
                    </p>
                    <p>
                        Our team is multi-disciplinary and we are not merely
                        interested in form - content and meaning are just as
                        important. We give great importance to craftmanship,
                        service, and prompt delivery. Clients have always been
                        impressed with our high-quality outcomes that encapsulates
                        their brand's story and mission.
                    </p>
                </div>
            </div>
        </StyledAboutCardInfo>
    )
}

export default AboutCardInfo;