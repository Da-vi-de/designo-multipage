import React from "react";
import styled from "styled-components";
import { CommonHeader } from "../styles/shared-styles/CommonDesignPagesHeader";

const Header = styled.header`
    ${CommonHeader}
`;

function GraphicDesignHeader() {
    return(
        <Header>
            <h1>graphic design</h1>
                <p>
                    We deliver eye-catching branding
                    materials that are tailored to meet
                    your business objectives.
                </p>
        </Header>
)
}

export default GraphicDesignHeader;