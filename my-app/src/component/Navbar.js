import React from "react";
import logo152 from "./logo512.png"; // Adjust the path if needed based on the location within the "src" directory.

function Navbar(){
    return (
        <nav>
            <img src={logo152} alt="React Logo" width="60" />
            <h3>React Facts</h3>
            <h4>React course-project 1</h4>
        </nav>
    )
}
export default Navbar;

