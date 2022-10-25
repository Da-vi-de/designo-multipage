import React from "react";
import styled from "styled-components";
import { CommonHeader } from "../styles/shared-styles/CommonDesignPagesHeader";

const Header = styled.header`
    ${CommonHeader}
`;

function WebDesignHeader() {
    return(
        <Header>
            <h1>web design</h1>
                <p>
                    We build websites that serve as
                    powerful marketing tools and bring
                    memorable brand experiences.
                </p>
        </Header>
    )
}

export default WebDesignHeader;