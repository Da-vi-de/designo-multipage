import React from "react";
import styled from "styled-components";
import { CommonHeader } from "../styles/shared-styles/CommonDesignPagesHeader";

const Header = styled.header`
    ${CommonHeader}
`;

function AppDesignHeader() {
    return(
        <Header>
            <h1>app design</h1>
                <p>
                    Our mobile Designs bring intuitive
                    digital solutions to your customers
                    right at their fingertips.
                </p>
        </Header>
)
}

export default AppDesignHeader;