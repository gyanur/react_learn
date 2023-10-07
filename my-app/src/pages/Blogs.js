// import React from "react";
// import "./glob.css";
// import blog from "./blog.jpg"; // Import the image without the "./src/pages" part
// import dash from "./dash.jpg"; // Import the image without the "./src/pages" part
// // import Store from "../component/Store"
// import Form from "../component/Form"
// import "../component/Form.css"; // Corrected import path

// const Navbar = () => {
//   return (
//     <>
//      <h1 style={{ textAlign: 'center', color: 'black'}}>Our Blog</h1>
//   <div className="top"style={{ display: 'flex' }} >
//      <div>
//      <div className="im border grey "> <Form/></div>
//     </div>
//     {/* <div className="im border grey m-1"> <Store/> </div> */}

//       <div className="im border grey m-1">
      
//         <div> 
//           <img src={blog} alt="Blog Logo" width="60"  className="group"/>
//         </div>
//         <div className="mi px-3">Blog:</div>
//         <div className="mi px-3">Find design inspapiration</div>
//       </div>

//       <div className="im border grey m-1">
//           <div>
//            <img src={dash} alt="Dashboard Logo" width="60" className="group"/> 
//           </div>
//           <div className="mi px-3">Checklist:</div>
//              <div className="mi px-3">Things to do Before Your First Day of Company</div>
//       </div> 

//     </div> 
//     </>
//   );
// }

// export default Navbar;


import React from "react";
import "./glob.css";
import blog from "./blog.jpg";
import dash from "./dash.jpg";
import Form from "../component/Form";
import "../component/Form.css";

const Navbar = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'black' }}>Our Blog</h1>
      <div className="top">
        <div className= "app  im border grey  m-1  px-6">
          <Form />
        </div>

        <div className="im border grey m-1">
          <div>
            <img src={blog} alt="Blog Logo" width="60" className="group" />
          </div>
          <div className="mi px-3">Blog:</div>
          <div className="mi px-3">Find design inspiration</div>
        </div>

        <div className="im border grey m-1">
          <div>
            <img src={dash} alt="Dashboard Logo" width="60" className="group" />
          </div>
          <div className="mi px-3">Checklist:</div>
          <div className="mi px-3">Things to do Before Your First Day of Company</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
 


