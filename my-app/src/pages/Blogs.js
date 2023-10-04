import React from "react";
import "./index.css";
import blog from "./blog.jpg"; // Import the image without the "./src/pages" part
import dash from "./dash.jpg"; // Import the image without the "./src/pages" part

const Navbar = () => {
  return (
    <>
    <h1 style={{ textAlign: 'center', color: 'black'}}>Our Blog</h1>
  <div className="top">
      <div className="im border grey m-1">
        <div> 
          <img src={blog} alt="Blog Logo" width="60" />
        </div>
        <div className="mi px-3">Blog:</div>
        <div className="mi px-3">Find design inspapiration</div>
      </div>

      <div className="im border grey m-1">
          <div>
            <img src={dash} alt="Dashboard Logo" width="60" /> 
          </div>
          <div className="mi px-3">Checklist:</div>
             <div className="mi px-3">Things to do Before Your First Day of Company</div>
      </div> 

    </div>
    </>
  );
}

export default Navbar;
