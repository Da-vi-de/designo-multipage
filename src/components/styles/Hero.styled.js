import styled from 'styled-components';
import bigCirle from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import PhoneImage from "../../assets/home/desktop/image-hero-phone.png";

export const Intro = styled.main`
    margin-top: 1rem;
    background: var(--color-peach)  url(${bigCirle})  no-repeat 0;
    background-size: auto;

    .content-position {
        display: flex;
        flex-direction: column;
    }

    h1, p {
       text-align: center;
       color: var(--color-white) ;
       font-weight: 400;
    }

    h1 {
       font-size: var(--font-size-1_5);
       letter-spacing: .2rem;
    }

    p {
        font-size: var(--font-size-1);
        padding: 1rem 0;
    }

    .phone-img {
        background-image: url(${PhoneImage});
        height: 26rem;
        background-repeat: no-repeat;
        background-size: 190%;
        background-position: 50% 21%;
    }
`;