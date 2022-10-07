import React from "react";

import { Intro } from "./styles/Hero.styled";
import { Container } from "./styles/Wrapper.styled";
import { ButtonLink } from "./styles/Button.styled";

import PhoneImage from "../assets/home/desktop/image-hero-phone.png";


function Hero() {
    return(
        <Intro>
            <Container>
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
                <img src= {PhoneImage} className="phone-img" alt="phone"/>
            </Container>
        </Intro>
    )
}

export default Hero;
