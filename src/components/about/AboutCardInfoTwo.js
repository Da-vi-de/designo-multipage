import React from "react";

import aboutCardInfoTwoImgMobile from "../../assets/about/mobile/image-real-deal.jpg";
import aboutCardInfoTwoImgTablet from "../../assets/about/tablet/image-real-deal.jpg";
import aboutCardInfoTwoImgDesktop from "../../assets/about/desktop/image-real-deal.jpg";

import { StyledAboutCardInfoTwo} from "../styles/about-styles/AboutCardInfoTwo.styled";

function AboutCardInfoTwo() {
    return(
        <StyledAboutCardInfoTwo>
            <div className="card">
                <div className="card-img">
                    <picture>
                        <source srcSet={aboutCardInfoTwoImgDesktop} media="(min-width: 1200px)"/>
                        <source srcSet={aboutCardInfoTwoImgTablet} media="(min-width: 790px)"/>
                        <img src={aboutCardInfoTwoImgMobile} alt="hands touching a paint on the wall"/>
                    </picture>
                </div>

                <div className="card-info">
                    <h2>The real deal</h2>
                    <p>
                        A strategic partners in our clients' business,
                        we are ready to take on any challege as our own.
                        Solving real problems require empathy and collaboration,
                        and we strive to bring a fresh perspective to every opportunity.
                        We make design and technology more accessible and give you tools
                        to mesure success.
                    </p>
                    <p>
                      We are visual storytellers in appealing and captivating
                      ways. By combining business and marketing strategies,
                      we inspire audiences to take action and drive real results.
                    </p>
                </div>
            </div>
        </StyledAboutCardInfoTwo>
    )
}

export default AboutCardInfoTwo;