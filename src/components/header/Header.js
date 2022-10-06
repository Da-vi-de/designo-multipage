import React, { useState } from "react";

import Burger from "./Burger";
import Menu from "./Menu";

function Header() {
    const [open, setOpen] = useState(false);

    return(
        <header>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </header>
    )
}

export default Header;