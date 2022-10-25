import styled from "styled-components";
import { QUERIES } from "../../../../utils/mediaQueries";

import webDesignMobile from "../../../../assets/home/mobile/image-web-design.jpg";
import webDesignTablet from "../../../../assets/home/tablet/image-web-design.jpg";
import webDesignDesktop from "../../../../assets/home/desktop/image-web-design-large.jpg";

import { CommonViewProjectsBanner } from "../../../styles/shared-styles/CommonViewProjectsBanner.styled";

export const StyledWebDesignBanner = styled.div`
    ${CommonViewProjectsBanner}
    .container {
        background-image: url(${webDesignMobile});
    }

    @media ${QUERIES.tabletMini} {
        .container {
            background-image: url(${webDesignTablet});
        }
    }

    @media ${QUERIES.desktop} {
        grid-area: 1/1/3/1;
        .container {
            background-image: url(${webDesignDesktop});
            padding-bottom: 42.5rem;
        }

        .text-container {
            transform: translateY(400%);
        }
    }
`