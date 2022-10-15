import styled from "styled-components";
import { QUERIES } from "../../../../utils/mediaQueries";

import graphicDesignMobile from "../../../../assets/home/mobile/image-graphic-design.jpg";
import graphicDesignTablet from "../../../../assets/home/tablet/image-graphic-design.jpg";
import graphicDesignDesktop from "../../../../assets/home/desktop/image-graphic-design.jpg";
import { CommonViewProjectsBanner } from "../../../styles/shared-styles/CommonViewProjectsBanner.styled"

export const StyledGraphicDesignBanner = styled.div`
    ${CommonViewProjectsBanner}
    .container {
        background-image: url(${graphicDesignMobile});
    }

    @media ${QUERIES.tabletMini} {
        .container {
            background-image: url(${graphicDesignTablet});
        }

    }

    @media ${QUERIES.desktop} {
        grid-area: 2/2/2/2;
        .container {
            background-image: url(${graphicDesignDesktop});
            padding-bottom: 15.725rem;
        }

        .text-container {
            transform: translateY(120%);
        }
    }
`