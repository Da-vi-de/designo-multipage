import React from "react";
import { Link } from "react-router-dom";

import facebook from "../../../assets/shared/desktop/icon-facebook.svg";
import youtube from "../../../assets/shared/desktop/icon-youtube.svg";
import twitter from "../../../assets/shared/desktop/icon-twitter.svg";
import pinterest from "../../../assets/shared/desktop/icon-pinterest.svg";
import instagram from "../../../assets/shared/desktop/icon-instagram.svg";

import  { StyledFooterContent }  from "../../styles/home-styles/footer-styles/FooterContent.styled";

function FooterContent() {
    return(
        <StyledFooterContent>
            <div className="navigation-container">
                <ul className="links">
                    <li><Link to="/about" className="underline-hover-effect">our company</Link></li>
                    <li><Link to="/locations" className="underline-hover-effect">locations</Link></li>
                    <li><Link to="/contact" className="underline-hover-effect">contact</Link></li>
                </ul>
            </div>

            <hr />

        <div className="company-info-container">
            <div className="company-location">
                <p className="info-intro">designo central office</p>
                <p className="info-details">3886 Wellinton Street</p>
                <p className="info-details">Toronto, Ontario M9C 3j5</p>
            </div>

            <div className="company-contact">
                <p className="info-intro">contact us (central office)</p>
                <p className="info-details">P: +1 253-863-8967</p>
                <p className="info-details">M: cotact@designo.co</p>
            </div>
        </div>

            <div>
                <ul className="social-icons">
                   <li><img src={facebook} alt="facebook" className="icon-img"/></li>
                   <li><img src={youtube} alt="youtube" className="icon-img"/></li>
                   <li><img src={twitter} alt="twitter" className="icon-img"/></li>
                   <li><img src={pinterest} alt="pinterest" className="icon-img"/></li>
                   <li><img src={instagram} alt="instagram" className="icon-img"/></li>
                </ul>
            </div>

        </StyledFooterContent>
    )
}

export default FooterContent;

/*

*/