import React from "react";

import aboutHeroImgMobile from "../../assets/about/mobile/image-about-hero.jpg";
import aboutHeroImgTablet from "../../assets/about/tablet/image-about-hero.jpg";
import aboutHeroImgDesktop from "../../assets/about/desktop/image-about-hero.jpg";

import { StyledAboutHeader } from "../styles/about-styles/AboutHeader.styled";

function AboutHeader() {
    return(
        <StyledAboutHeader>
            <div className="card">
                <div className="card-img">
                    <picture>
                        <source srcSet={aboutHeroImgDesktop} media="(min-width: 1200px)"/>
                        <source srcSet={aboutHeroImgTablet} media="(min-width: 790px)"/>
                        <img src={aboutHeroImgMobile} alt="people working at a table"/>
                    </picture>
                </div>

                <div className="card-info">
                    <h1>about us</h1>
                    <p>
                        Founded in 2010, we are a creative
                        agency that produces lasting results
                        for our clients. We've partnered with
                        many startups, corporations, and nonprofits
                        alike to craft designs that make real impact.
                        We're always looking forward to creating brands,
                        products, and digital experiences that connect with
                        our clients' audiences.
                    </p>
                </div>
            </div>
        </StyledAboutHeader>
    )
}

export default AboutHeader;