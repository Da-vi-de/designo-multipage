import styled from "styled-components";
import { QUERIES } from "../../../../utils/mediaQueries";

import appDesignMobile from "../../../../assets/home/mobile/image-app-design.jpg";
import appDesignTablet from "../../../../assets/home/tablet/image-app-design.jpg";
import appDesignDesktop from "../../../../assets/home/desktop/image-app-design.jpg";
import { CommonViewProjectsBanner } from "../../../styles/shared-styles/CommonViewProjectsBanner.styled"

export const StyledAppDesignBanner = styled.div`
    ${CommonViewProjectsBanner}
    .container {
        background-image: url(${appDesignMobile});
    }

    @media ${QUERIES.tabletMini} {
        .container {
            background-image: url(${appDesignTablet});
        }
    }

    @media ${QUERIES.desktop} {
        grid-area: 1/2/1/2;
        .container {
            background-image: url(${appDesignDesktop});
            padding-bottom: 14.875rem;
        }

        .text-container {
            transform: translateY(120%);
        }
    }
`