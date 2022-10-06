import React, { useState } from "react";

import Burger from "./Burger";

function Header() {
    const [open, setOpen] = useState(false);

    return(
        <header>
            <Burger open={open} setOpen={setOpen} />
        </header>
    )
}

export default Header;