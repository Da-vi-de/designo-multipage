import React, { useState } from "react";
import styled from "styled-components";

import LogoDark from "./LogoDark";
import Burger from "./Burger";
import Menu from "./Menu";

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

function Header() {
    const [open, setOpen] = useState(false);

    return(
        <header>
            <Div>
                <LogoDark />
                <Burger open={open} setOpen={setOpen} />
            </Div>
            <Menu open={open} setOpen={setOpen} />
        </header>
    )
}

export default Header;