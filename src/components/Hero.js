import React from "react";

import { Intro } from "./styles/Hero.styled";
import { Container } from "./styles/Wrapper.styled";
import { ButtonLink } from "./styles/Button.styled";

function Hero() {
    return(
        <Intro>
            <Container>
                <div className="content-position">
                    <div className="text-button-position">
                    <h1>
                        Award-winning custom designs and digital
                        branding solutions
                    </h1>
                    <p>
                        With over 10 years in the industry,
                        we are experienced in creating fully
                        responsive websites, app designs, and
                        engaging brand experiences. Find out
                        more about our services.
                    </p>
                    <ButtonLink to="/about">Learn More</ButtonLink>
                    </div>
                 </div>
                <div className="phone-img"></div>
             </Container>
        </Intro>
    )
}

export default Hero;
